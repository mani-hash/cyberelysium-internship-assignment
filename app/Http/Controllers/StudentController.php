<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentRequest;
use App\Models\Student;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $studentPagination = Student::select("id", "name", "age", "status", "image")->simplePaginate(10);

        return Inertia::render('Dashboard/ViewStudents', [
            'studentPagination' => $studentPagination,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Dashboard/AddStudent');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StudentRequest $request): RedirectResponse
    {
        $path = $this->storeImage($request->file("image"));

        $student = new Student();
        $student->name = $request->input('name');
        $student->age = $request->input('age');
        $student->status = $request->input('status');
        $student->image = $path;
        $student->save();

    
        return redirect()->route('dashboard.students.create');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StudentRequest $request, Student $student): RedirectResponse
    {
        // Store the image
        $path = $this->storeImage($request->file("image"));

        // Delete previous image only if user chooses new image
        if ($request->old_image_path !== null && $request->file("image") !== null) {
            Storage::delete($request->old_image_path);
        }

        // Update user data
        $student->update([
            "name" => $request->input("name"),
            "age" => $request->input("age"),
            "status" => $request->input("status"),
            "image" => $path ?? $request->old_image_path,
        ]);

        return redirect()->route("dashboard.students.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student): RedirectResponse
    {
        // Delete image if it exists
        if ($student->image !== null) {
            Storage::delete($student->image);
        }

        $student->delete();

        return redirect()->route('dashboard.students.index');
    }

    // Store the image
    private function storeImage($file): string|null
    {
        if (!$file) {
            return null;
        }

        $path = Storage::putFile('public/image', $file);
        return $path;
    }
}
