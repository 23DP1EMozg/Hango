<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\UserController;
use App\Models\Event;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Pages
Route::get('/', function () {
    return inertia('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/profile', function() {
    return Inertia::render('Profile', [
        "events" => Event::where("owner_id", Auth::id())->get()
    ]);
})->middleware('auth');

Route::get('/create-event', function() {
    return Inertia::render("CreateEvent");
})->middleware('auth');

Route::get('browse-events', function() {
    return Inertia::render("BrowseEvents", [
        'events' => Event::all()
    ]);
})->middleware('auth');

// Auth
Route::get('/register', function(){
    return Inertia::render("Register");
});
Route::post('/register', [AuthController::class, 'Register']);

Route::get('/login', function(){
    return Inertia::render("Login");
});

Route::post('/login', [AuthController::class, 'login']);

// User
Route::get('/user', [UserController::class, 'getUser'])
    ->middleware('auth');

Route::delete('/user/{id}', [UserController::class, 'deleteuser'])
    ->middleware('auth');

// Event
Route::post('/event', [EventController::class, 'createEvent'])
    ->middleware('auth');

Route::get('/event', [EventController::class, "getAllEvents"])
    ->middleware('auth');

