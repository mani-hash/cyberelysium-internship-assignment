import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col pt-0 bg-gray-100">

            {/* Navbar */}
            <GuestNavBar />

            {/* Content */}
            <div className="flex flex-col justify-center items-center flex-grow">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}

function GuestNavBar() {

    // style definitions
    const selected_styles: string = "text-white bg-black hover:bg-gray-700"
    const unselected_styles: string = "text-gray-600 hover:text-white hover:bg-black"

    // get current style depending on current route
    function getCurrentStyle(route_name: string): string {
        if (route().current() === route_name) {
            return selected_styles;
        }

        return unselected_styles;
    }

    return (
        <nav className="w-full p-6">
            <div className="max-w-7xl mx-auto flex flex-row justify-between">
                <div>
                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                </div>
                <div className="flex gap-2">
                    <Link
                        href={route('login')}
                        className={`${getCurrentStyle('login')} font-semibold px-3 py-2 focus-outline-none rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out`}
                    >
                        Log in
                    </Link>

                    <Link
                        href={route('register')}
                        className={`${getCurrentStyle('register')} font-semibold px-3 py-2 focus-outline-none rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out`}
                    >
                        Register
                    </Link>
                </div>

            </div>
        </nav>
    );
}
