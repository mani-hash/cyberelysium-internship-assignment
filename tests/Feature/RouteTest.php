<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RouteTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(302);
    }

    public function test_guest_access_dashboard_response(): void
    {
        $response = $this->get('/dashboard');

        $response->assertStatus(302);
    }

    public function test_guest_access_add_student_response(): void
    {
        $response = $this->get('/dashboard/students/create');

        $response->assertStatus(302);
    }

    public function test_guest_access_view_student_response(): void
    {
        $response = $this->get('/dashboard/students');

        $response->assertStatus(302);
    }

    public function test_guest_access_profile_response(): void
    {
        $response = $this->get('/profile');

        $response->assertStatus(302);
    }

    
}
