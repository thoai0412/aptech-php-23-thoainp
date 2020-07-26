<?php

namespace App\Http\Controllers;

use App\Models\Category;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\ConnectException;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Models\User;
use Mews\Purifier\Facades\Purifier;
use App\Http\Requests\PostRequest;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $offset = OFFSET, $limit = LIMIT)
    {

        if (empty($request->category)) {
            if (!!$request->auth) {
                $posts = Post::with('author', 'images', 'categories')->latest()->paginate(PAGINATION['TEN'])->appends(['auth' => 'true']);
            } else {
                $posts = Post::publish()->with('author', 'images', 'categories')->latest()->paginate(PAGINATION['FIVE']);
            }

            return response_success([
                'posts' => $posts

            ]);
        }

        $category = $request->category;
        $posts = Category::where('slug', $category)->first()->posts()->latest()->with('author', 'images', 'categories')->paginate(PAGINATION['FIVE'])->appends(['category' => $category]);

        return response_success([
            'posts' => $posts

        ]);



    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $images = $request->file('images');

        $post = collect(json_decode($request->post));

        $postInfo = $post->only(['title', 'description', 'content'])->toArray();
        $validator = Validator::make($postInfo, [
            'title' => 'required',
            'description' => 'required',
            'content' => 'required'
        ]);

        if ($validator->fails()) {
            return response_error(['errors' => $validator->errors()]);
        };

        $postTitle = trim($postInfo['title']);
        $postTitleSlug = slugify($postTitle);

        $existsPost = Post::withTrashed()->where('slug', $postTitleSlug)->first();

        $postSlug = $existsPost ? $postTitleSlug . '-duplicate-' . faker()->uuid : $postTitleSlug;

        $postDescription = trim($postInfo['description']);
        $postContent = trim($postInfo['content']);
        $postUserId = auth_user()->id;

        $newPost = Post::create(['title' => $postTitle, 'slug' => $postSlug, 'description' => $postDescription, 'content' => $postContent, 'user_id' => $postUserId]);


        if (!!$images) {
            $imageSaved = [];
            foreach ($images as $image) {
                array_push($imageSaved, saveImage($image));
            }
            foreach ($imageSaved as $image) {
                $image->posts()->attach($newPost->id);
            }
        }

        if (count($post['categories'])) {
            $categories = collect($post['categories']);
            $categories->each(function ($category) use ($newPost) {
                Category::find($category)->posts()->attach($newPost->id);
            });
        } else {
            Category::where('name', 'uncategorized')->first()->posts()->attach($newPost->id);
        }

        $post = Post::postById($newPost->id);;


        return response_success(['post' => $post]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {

        $post = Post::with('images', 'author', 'categories')->where('slug', $slug)->first();
        $post->view = $post->view + 1;
        $post->reputation = $post->view;
        $post->save();

        // $categoryId = $post->categories->modelKeys();
        // $related_posts = Post::with('images', 'author')->whereHas('categories', function ($query) use ($categoryId) {
        //     $query->whereIn('categories.id', $categoryId);
        // })
        //     ->orderByDesc('reputation')
        //     ->where('id', '<>', $post->id)
        //     ->take(3)
        //     ->get();
        // $post = collect($post)->merge(['related_posts' => $related_posts->toArray()]);

        return response_success([
            'post' => $post
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Post $post, Request $request)
    {
        $updatedPost = collect(json_decode($request->post));

        
        // IN CASE UPDATE STATUS ONLY
        if (isset($updatedPost['status'])) {
            if ($updatedPost['status'] !== $post->status) {
                $updatedPost = $updatedPost->only(['status'])->toArray();
                $post->update($updatedPost);
            }
        } else {
            // IN CASE UPDATE POST
            // $images = $request->file('images');

            $postInfo = $updatedPost->only(['title', 'description', 'content'])->toArray();
            $validator = Validator::make($postInfo, [
                'title' => 'required',
                'description' => 'required',
                'content' => 'required'
            ]);

            if ($validator->fails()) {
                return response_error(['errors' => $validator->errors()]);
            };

            // UPDATE posts TABLE with information
            $post->update(postCleared($postInfo));

            $arrayImages = collect($request->images)->map(function ($image) {
                if (!is_object($image)) {
                    return json_decode($image)->id;
                }
            });


            $images = $request->file('images');

            if (!!$images) {
                $imageSaved = [];
                foreach ($images as $key => $image) {
                    if ($arrayImages[$key] === null) {
                        $arrayImages[$key] = saveImage($image)->id;
                    }
                }
            }

            $arrayImages = $arrayImages->toArray();
            ksort($arrayImages);
            $post->images()->detach($arrayImages);
            $post->images()->sync($arrayImages);

            // UPDATE categories TABLE with changed
            $updatedCategories = collect($updatedPost['categories']);
            if (count($updatedCategories->pluck('id')->diff($post->categories->pluck('id')))) {
                $post->categories()->sync($updatedCategories);
            }
        }


        return response_success(['post' => Post::postById($post->id)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        return $post->delete()
            ? response_success(['post' => $post], 'deleted post id ' . $post->id)
            : response_error([], 'can not find post id ' . $post->id, 401);
    }

    /*
     *  SOFT DELETE
     */

    public function indexDeleted()
    {
        $posts = Post::onlyTrashed()->get();
        return response_success(['posts' => $posts]);
    }

    public function destroyDeleted($id)
    {
        $post = Post::withTrashed()->find($id);
        return $post->forceDelete() ?
            response_success(['post' => $post], 'deleted permanently post id ' . $post->id) : response_error([], 'can not find post id ' . $post->id, 401);
    }


    public function restoreDeleted($id)
    {
        $post = Post::withTrashed()->find($id);
        return $post->restore() ?
            response_success(['post' => $post], 'retore deleted post id ' . $post->id) : response_error([], 'can not find post id ' . $post->id, 401);
    }

    // protected function postById($id)
    // {
    //     $post = Post::with('author', 'images', 'categories')->find($id);

    //     return $post;
    // }

}
