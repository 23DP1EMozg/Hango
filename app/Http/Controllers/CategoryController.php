<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function createCategory(Request $request) {
        $validated = $request->validate([
            'title' => 'required|unique:categories,title'   
        ], [
            'title.unique' => "jau eksistē"
        ]);

        Category::create($validated);
        return redirect()->back()->with('success', 'Kateogrija izveidota');
    }

    public function getAllCategories() {
        $categories = Category::all();
        return $categories;
    }
}
