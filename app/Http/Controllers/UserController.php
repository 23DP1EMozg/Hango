<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller {

    public function getUser(Request $request) {
        return $request->user();
    }

    public function deleteUser($id) {
        $user = User::findOrFail($id);

        if (Auth::id() !== (int) $id) {
            abort(403);
        }

        Auth::logout();
        $user->delete();

        request()->session()->invalidate();
        request()->session()->regenerateToken();
        return redirect("/login");
    }
   
    public function makeAdmin($id) {
        $user = User::findOrFail($id);

        if ($user->admin == false) {
            $user->admin = true;
            $user->save();
        }
        return redirect()->back()->with('success', 'updated!');
    }

}