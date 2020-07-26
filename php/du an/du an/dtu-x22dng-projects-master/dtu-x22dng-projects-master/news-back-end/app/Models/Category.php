<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Scopes\CategoryParentNullScope;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    protected $table = 'categories';

    protected $hidden = [];

    protected $fillable = [
        'name', 'id', 'slug'
    ];



    public function posts()
    {
        return $this->belongsToMany(Post::class)->withTimestamps();
    }

    public function subCategories()
    {
        return $this->hasMany('App\Models\Category', 'parent_id', 'id');
    }


    public function scopeParentIdIsNull($query)
    {
        return $query->where('parent_id', null);
    }



}
