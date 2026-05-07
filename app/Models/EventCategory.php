<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EventCategory extends Model
{
    protected $fillable = [
        'category_id',
        'event_id'
    ];

    public function category() : BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function event() : BelongsTo
    {
        return $this->belongsTo(Event::class);
    }
}
