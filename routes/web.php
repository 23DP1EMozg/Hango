<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/register', function(){
    return Inertia::render("Register");
});