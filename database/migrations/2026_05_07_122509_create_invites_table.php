<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('invites', function (Blueprint $table) {
            $table->id();
            
            // The person sending the invite
            $table->foreignId('from_user')->constrained('users')->onDelete('cascade');
            
            // The person receiving the invite
            $table->foreignId('to_user')->constrained('users')->onDelete('cascade');
            
            // The event associated with the invite
            $table->foreignId('event_id')->constrained()->onDelete('cascade');
            
            // Status: pending, accepted, declined, etc.
            $table->string('status')->default('pending');
            
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('invites');
    }
};