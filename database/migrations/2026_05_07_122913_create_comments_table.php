<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            
            // Reference to the user who wrote the comment
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            
            // Reference to the event being commented on
            $table->foreignId('event_id')->constrained()->onDelete('cascade');
            
            // The actual comment text
            $table->text('content');
            
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};