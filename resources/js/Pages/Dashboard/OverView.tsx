import DashboardLayout from "./Layout/DashboardLayout";

export default function OverView() {
    return (
        <DashboardLayout>
            <div className="max-w-2xl mx-auto mb-5">
                <div className="w-full my-10">
                    <h3 className="font-extrabold text-2xl text-center">Overview</h3>

                </div>

                <div className="text-center">
                    <p className="text-md font-bold">Welcome to the dashboard!</p>
                    <section className="mt-10">
                        <p className="text-gray-900">You can use the dashboard to create, update, edit and delete students!</p>
                    </section>
                </div>

            </div>

        </DashboardLayout>
    );
}