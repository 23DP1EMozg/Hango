<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'title',
        'description',
        'date',
        'time',
        'location',
        'city',
        'capacity',
        'age_group',
        'privacy',
        'category_id',
        'owner_id'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
