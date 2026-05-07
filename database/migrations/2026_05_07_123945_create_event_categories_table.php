<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('event_categories', function (Blueprint $table) {
            $table->id();
            
            // Link to the categories table
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            
            // Link to the events table
            $table->foreignId('event_id')->constrained()->onDelete('cascade');
            
            $table->timestamps();

            // Optional: Prevent the same category being assigned to the same event twice
            $table->unique(['category_id', 'event_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_categories');
    }
};