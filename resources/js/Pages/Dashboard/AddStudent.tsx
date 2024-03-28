import DashboardLayout from "./Layout/DashboardLayout";
import StudentForm from "./Form/StudentForm";

interface FormData { 
    name : string,
    age: string,
    status: string,
    image: File | undefined,

}
// const FormContext = createContext(null);

export default function AddStudent() {

    return (
        <DashboardLayout>
            <div className="max-w-2xl mx-auto mb-10">
                <div className="w-full my-10">
                    <h3 className="font-extrabold text-2xl text-center">Add Student</h3>

                </div>

                <StudentForm message="Student created successfully" route_name="dashboard.students.store" />

            </div>

        </DashboardLayout>

    );
}