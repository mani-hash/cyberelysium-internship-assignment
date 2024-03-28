import DangerButton from "@/Components/DangerButton";
import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef } from "react";

// Form data interface
interface FormData {
    name: string,
    age: string,
    status: string,
    image: File | undefined,
    old_image_path?: string|null

}

// method types
type MethodType = "put" | "patch";

type StudentFormType = {
    id?: number, 
    name?: string, 
    age?: number|string, 
    status?:number, 
    message?: string, 
    old_image_path?: string|null, 
    route_name: string, 
    method?: MethodType
}


// Student form component
export default function StudentForm(
    {id, name = '', age = '', status = 1, message = 'Success!', old_image_path, route_name, method}: StudentFormType
) {
    
    const { data, setData, post, processing, reset, errors, recentlySuccessful } = useForm<FormData>({
        name: name,
        age: age.toString(),
        status: status.toString(),
        image: undefined,
        old_image_path: old_image_path,
    });

    const handleSubmit : FormEventHandler = (e) => {
        e.preventDefault();

        if (method) {
            // For put/patch request (method spoof)
            post(route(route_name, [id]), {
                method: method,
                onSuccess: () => fileInputRef.current!.value = '',
            });

        } else {
            // For post request
            post(route(route_name), {
                onSuccess: () => handleReset(),
                
            });
        }
    }

    // Image file input ref
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Handle reset form functionality
    function handleReset(): void {
        reset();
        fileInputRef.current!.value = '';
    }

    return (
        <>

            {/* Success Msg */}
            <div className="text-center mb-10">
                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="py-3 px-4 text-md text-green-800 bg-lime-200 border border-green-600 rounded-lg">
                        {message}
                    </p>
                </Transition>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>

                {/* Student name */}
                <div>
                    <InputLabel value="Student Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        autoComplete="name"
                        required
                    />

                    <InputError className="mt-1" message={errors.name} />

                </div>

                {/* Age */}
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

                    <InputError className="mt-1" message={errors.age} />

                </div>

                {/* Status */}
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

                    <InputError className="mt-1" message={errors.status} />

                </div>

                {/* Image */}
                <div>
                    <InputLabel value="Image" />

                    <FileInput
                        id="image"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={(e) => setData('image', e.target.files?.[0])}
                        className="mt-1 block w-full"
                    />

                    <InputError className="mt-1" message={errors.image} />
                </div>

                {/* Button Group */}
                <div className="flex flex-row justify-evenly">
                    <PrimaryButton disabled={processing} type="submit" className="text-xl py-4 px-6">
                        Add
                    </PrimaryButton>

                    <DangerButton type="button" onClick={(e) => handleReset()} className="text-xl py-4 px-6">
                        Clear
                    </DangerButton>
                </div>
            </form>
        </>

    );
}