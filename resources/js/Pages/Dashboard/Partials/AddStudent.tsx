import DangerButton from "@/Components/DangerButton";
import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function AddStudent() {

    const { data, setData, post, processing, reset, errors } = useForm({
        student_name : '',
        age: '',
        status: '1',
        image: '',
        
    });

    const addStudent : FormEventHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="max-w-2xl mx-auto">
            <h3 className="font-extrabold text-2xl text-center mb-5">Add Student</h3>
            <form className="space-y-4" onSubmit={addStudent}>
                <div>
                    <InputLabel value="Student Name" />

                    <TextInput
                        id="student_name"
                        className="mt-1 block w-full"
                        value={data.student_name}
                        onChange={(e) => setData("student_name", e.target.value)}
                        autoComplete="student_name"
                        required
                    />

                    <InputError className="mt-1" message="" />

                </div>

                <div>
                    <InputLabel value="Age" />

                    <TextInput
                        id="age"
                        className="mt-1 block w-full"
                        value={data.age}
                        onChange={(e) => setData("age", e.target.value)}
                        autoComplete="age"
                        required
                    />

                    <InputError className="mt-1" message="" />

                </div>

                <div>
                    <InputLabel value="Status" />

                    <SelectInput
                        id="status"
                        className="mt-1 block w-full"
                        value={data.status}
                        onChange={(e) => setData("status", e.target.value)}
                    >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </SelectInput>

                    <InputError className="mt-1" message="" />

                </div>

                <div>
                    <InputLabel value="Image" />
                    
                    <FileInput
                        id="image"
                        accept="image/*"
                        value={data.image}
                        onChange={(e) => setData('image', e.target.value)}
                        className="mt-1 block w-full"
                    />

                    <InputError className="mt-1" message="" />
                </div>

                <div className="flex flex-row justify-evenly">
                    <PrimaryButton type="submit" className="text-xl py-4 px-6">
                        Add
                    </PrimaryButton>

                    <DangerButton type="button" onClick={(e) => reset()} className="text-xl py-4 px-6">
                        Clear
                    </DangerButton>
                </div>

            </form>

        </div>

    );
}