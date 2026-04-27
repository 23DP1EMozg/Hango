<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller {
    
    public function createEvent(Request $request) {
    $validated = $request->validate([
            'title'       => 'required|max:255',
            'description' => 'nullable|string',
            'date'        => 'required|date',
            'time'        => 'required',
            'location'    => 'required|string',
            'city'        => 'required|string',
            'capacity'    => 'required|integer',
            'age_group'   => 'required|string',
            'privacy'     => 'required|string',
            'type'        => 'required|string',
        ]);

        $validated['owner_id'] = Auth::id();

        Event::create($validated);

        return redirect()->back()->with('success', 'pasākums izveidots');
    }

    public function getAllEvents() {
        $events = Event::orderBy('date', 'asc')->get();
        return $events;
    }

    public function getAllUserCreatedEvents($id) {
        $events = Event::where("owner_id", $id)->get();
        return $events;
    }
}
