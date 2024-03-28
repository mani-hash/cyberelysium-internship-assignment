import Modal from "@/Components/Modal";
import StudentForm from "../Form/StudentForm";
import { Student } from "@/types";

export default function EditStudent(
    { studentData, show, onClose }:
    { studentData: Student|null, show: boolean, onClose: CallableFunction }
) {
    if (studentData === null) {
        return;
    }
    

    return (
        <Modal maxWidth="lg" show={show} onClose={onClose}>
            <div className="px-5 py-2 my-5">
                <div className="w-full px-5">
                    <h5 className="font-extrabold text-2xl text-center">Edit Student</h5>
                </div>

                <StudentForm
                    id={studentData.id}
                    name={studentData.name} 
                    age={studentData.age} 
                    status={Number(studentData.status)} 
                    message="Student details changed successfully"
                    old_image_path={studentData.image}
                    route_name="dashboard.students.update"
                    method="patch"
                />
            </div>
        </Modal>
    );
}