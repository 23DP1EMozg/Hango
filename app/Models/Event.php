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
        'type',
        'owner_id'
    ];
}
