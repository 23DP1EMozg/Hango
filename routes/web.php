<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Request;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/register', function(){
    return Inertia::render("Register");
});
Route::post('/register', [AuthController::class, 'Register']);

Route::get('/login', function(){
    return Inertia::render("Login");
});

Route::post('/login', [AuthController::class, 'login']);

Route::get('/user', [UserController::class, 'getUser'])
    ->middleware('auth:sanctum');