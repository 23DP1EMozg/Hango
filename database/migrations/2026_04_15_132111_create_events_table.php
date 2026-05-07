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
    Schema::create('events', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('description')->nullable();
        $table->date('date');
        $table->time('time');
        $table->string('location');
        $table->string('city');
        $table->integer('capacity')->nullable();
        $table->string('age_group');
        $table->string('privacy');
        
        // Use foreignId for your category
        $table->foreignId('category_id')->constrained()->onDelete('cascade');
        
        // Include owner_id here
        $table->foreignId('owner_id')->constrained('users')->onDelete('cascade');
        
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
        
    }
};
