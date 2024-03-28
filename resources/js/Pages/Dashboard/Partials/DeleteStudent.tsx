import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";


export default function DeleteStudent(
    { id, show, onClose }: 
    { id: number|null, show: boolean, onClose: CallableFunction}
) {
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
       
    });

    const deleteStudent : FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('dashboard.students.destroy', [id]), {
            preserveScroll: true,
            onSuccess: onClose(),
        })
    }

    return (
        <Modal maxWidth="md" show={show} onClose={onClose}>
            <form onSubmit={deleteStudent} className="p-6">
                <h2 className="text-lg font-medium text-gray-900">
                    Are you sure you want to delete this student?
                </h2>

                <div className="mt-6 flex justify-end">
                    <SecondaryButton type="button" onClick={() => onClose()}>Cancel</SecondaryButton>
                    <DangerButton className="ms-3" disabled={processing}>
                        Delete Account
                    </DangerButton>
                </div>
            </form>
        </Modal>
    );
}