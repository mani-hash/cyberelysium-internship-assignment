<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => ["required", "string", "max:255"],
            "age" => ["required", "integer", "min:1", "max:100"],
            "status" => ["required", "boolean"],
            "image" => ["max:500", "mimes:jpg,png"]
        ];
    }

    public function messages(): array
    {
        return [
            "name" => [
                "required" => "Student name cannot be empty",
                "max" => "Student name is too long",
            ],
            "age" => [
                "required" => "Age cannot be empty",
                "integer" => "Only whole numbers allowed",
                "min" => "Student's age cannot be less than 1",
                "max" => "Student's age cannot be greater than 100",
            ],
            "status" => [
                "required" => "Failed to validate",
                "boolean" => "An error occured",
            ],
            "image" => [
                "max" => "Upload an image less than 500 KB",
                "mimes" => "Invalid image format. Only jpg, png format accepted",
            ]
        ];
    }
}
