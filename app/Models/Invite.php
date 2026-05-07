<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Invite extends Model
{
    protected $fillable = [
        "from_user",
        "to_user",
        "event_id",
        "status",
    ];

    public function sender(): BelongsTo
    {
        return $this->belongsTo(User::class, 'from_user');
    }

    public function recipient(): BelongsTo
    {
        return $this->belongsTo(User::class, 'to_user');
    }

    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }
}
