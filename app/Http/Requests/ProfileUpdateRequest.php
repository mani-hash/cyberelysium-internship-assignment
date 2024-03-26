<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:5', 'max:20', 'regex:/^(?![_0-9])[a-zA-Z0-9_]*[a-zA-Z][a-zA-Z0-9_]*$/'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
        ];
    }

    // Get the custom messages for the above validation rules
    public function messages(): array
    {
        return [
            'name' => [
                'min' => 'Name cannot be less than five letters',
                'max' => 'Name cannot be longer than 20 letters',
                'regex' => 'Name must start with letters. Numbers and underscores are allowed.',
            ],
        ];
    }
}
