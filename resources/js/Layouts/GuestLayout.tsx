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
    return (
        <div className="w-full p-6 text-end">
            <Link
                href={route('login')}
                className="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
            >
                Log in
            </Link>

            <Link
                href={route('register')}
                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
            >
                Register
            </Link>
        </div>
    );
}
