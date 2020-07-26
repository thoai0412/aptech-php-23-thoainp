<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Purifier;
use Illuminate\Database\Eloquent\Builder;

class Post extends Model
{
    use SoftDeletes;

    protected $table = 'posts';

    protected $fillable = ['title', 'slug', 'description', 'content', 'user_id', 'status'];

    protected $hidden = [
        'deleted_at'
    ];

    protected $appends = [
        'next_slug',
        'previous_slug'
    ];



    public function scopePublish($query)
    {
        return $query->where('status', 'publish');
    }

    public function getNextSlugAttribute()
    {

        $post = Post::where('id', '>', $this->id)->first();
        return !!$post ? $post->slug : '';
    }

    public function getPreviousSlugAttribute()
    {
        $post = Post::where('id', '<', $this->id)->first();
        return !!$post ? $post->slug : '';
    }

    public function setContentAttribute($value)
    {
        return $this->attributes['content'] = Purifier::clean($value);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class)->withCount('posts')->withTimestamps();
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function images()
    {
        return $this->belongsToMany(Image::class)->withTimestamps();
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class)->withTimestamps();
    }

    public static function postById($id)
    {
        return Post::with('author', 'images', 'categories')->find($id);
    }


}
