<?php



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */


Route::group([
    'prefix' => 'v1'
], function () {
    Route::group(['middleware' => 'auth'], function () {
        Route::post('me', 'Auth\AuthController@me')->name('auth.me');
        Route::post('logout', 'Auth\AuthController@logout')->name('auth.logout');
        Route::get('download-image', 'ImageController@downloadImageFormPost')->name('backup.download-image');
        Route::post('add-image', 'ImageController@addImageFromFolder')->name('backup.add-image');
        Route::post('attach-image-post', 'ImageController@attachImagePost')->name('backup.attach-image-post');


    });

    /*
     *  AUTHENTICATION 
     */
    Route::post('login', 'Auth\AuthController@login')->name('auth.login');
    Route::post('refresh', 'Auth\AuthController@refresh')->name('auth.refresh');


    /*
     *  INFORMATION
     */
    Route::get('information', 'InformationController@index')->name('information.index');
    Route::put('information', 'InformationController@update')->name('information.update');


    Route::apiResource('menus', 'MenuController');
    Route::apiResource('images', 'ImageController');


    /*
     *  CATEGORY
     */
    Route::apiResource('categories', 'CategoryController');
    Route::get('categories-deleted', 'CategoryController@indexDeleted')->name('categories.indexDeleted');
    Route::delete('categories-deleted/{id}', 'CategoryController@destroyDeleted')->name('categories.destroyDeleted');
    Route::put('categories-deleted/{id}', 'CategoryController@restoreDeleted')->name('categories.restoreDeleted');
    /*
     *  POST
     */

    Route::group(['middleware' => 'auth'], function () {
        Route::post('/posts', 'PostController@store')->name('posts.store');
        Route::put('posts/{post}', 'PostController@update')->where('id', '^\d+')->name('posts.update');
    });
    Route::resource('posts', 'PostController', ['except' => [
        'store', 'update'
    ]]);
    Route::get('posts-deleted', 'PostController@indexDeleted')->name('posts.indexDeleted');
    Route::delete('posts-deleted/{id}', 'PostController@destroyDeleted')->name('posts.destroyDeleted');
    Route::put('posts-deleted/{id}', 'PostController@restoreDeleted')->name('posts.restoreDeleted');

    /*
     * USER
     */
    Route::group(['middleware' => 'auth'], function () {
        Route::get('users', 'UserController@index')->name('users.index');
    });
    Route::resource('users', 'UserController', ['except' => [
        'index'
    ]]);
    Route::get('users-deleted', 'UserController@indexDeleted')->name('users.indexDeleted');
    Route::delete('users-deleted/{id}', 'UserController@destroyDeleted')->name('users.destroyDeleted');
    Route::put('users-deleted/{id}', 'UserController@restoreDeleted')->name('users.restoreDeleted');

    /*
     *  TAG
     *  
     */

    Route::resource('tags', 'TagController', ['only' => ['index']]);

});





