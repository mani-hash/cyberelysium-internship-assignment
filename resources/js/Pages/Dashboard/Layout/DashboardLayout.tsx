import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from "@/types";
import { Head, Link, usePage } from '@inertiajs/react';
import { ReactNode } from 'react';

interface DashboardLink {
    name : string,
    route_name : string,
}

export default function DashboardLayout({ children }: {children: ReactNode}) {
    // {console.log(students)}
    const dashboard_links : Array<DashboardLink> = [
        {
            name: 'Overview',
            route_name: 'dashboard',
        },
        {
            name: 'Add Student',
            route_name: 'dashboard.students.create',
        },
        {
            name: 'View Students',
            route_name: 'dashboard.students.index',
        },
    ];

    const { auth } = usePage<PageProps>().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-10">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="border bg-white border-slate-300 rounded-full mb-10 w-fit mx-auto">
                        <DashboardNavBar 
                            className="flex flex-row justify-center gap-2"
                            dashboard_links={dashboard_links}
                        />

                    </div>
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="px-4 py-4 space-y-2">
                            {children}
                        </div>
                        {/* <div className="p-6 text-gray-900">You're logged in!</div> */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function DashboardNavBar({ className, dashboard_links } : { className: string, dashboard_links : Array<DashboardLink>}) {
    return (
        <div className={className}>
            {dashboard_links.map(link => (
                <Link
                    key={link.name}
                    href={route(link.route_name)}
                    className={
                        `px-4 py-3 font-bold text-md rounded-full 
                        ${(route().current() === link.route_name ? 
                            'bg-black hover:bg-slate-700 text-white' 
                                : 
                            'bg-white hover:bg-black hover:text-white'
                        )} 
                        hover:shadow-lg transition-all duration-200 ease-in-out`
                    }
                >
                    {link.name}
                </Link>

            ))}
            
        </div>
    );
}