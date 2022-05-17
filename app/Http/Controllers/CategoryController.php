<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index()
    {
        $categories = Category::all();
       return response()->json($categories);
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
//            'image' => 'required|image'
        ]);

        $category = new Category();
        $category->name = $request->name;
//        $image = $request->file('image');
//        if ($image) {
//            $imageName = time() . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
//            $image->move(public_path('/uploads/category/'), $imageName);
//            $image->image = '/uploads/category/' . $imageName;
//        }
        $category->save();
        return response()->json($category);

    }


    public function show(Category $category)
    {
        //
    }


    public function edit(Category $category)
    {
        //
    }

    public function update(Request $request, Category $category)
    {
        //
    }


    public function destroy(Category $category)
    {
        //
    }
}
