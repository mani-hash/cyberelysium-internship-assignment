import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function AddStudent() {
    return (
        <form>
            <div>
                <InputLabel value="Add Student" className="font-semibold text-xl" />

                <div className="flex flex-row gap-2 mt-1">
                    <TextInput
                        id="student-name"
                        className="flex-grow min-w-[175px] w-[600px] md:flex-grow-0"
                        required
                    />

                    <PrimaryButton type="submit" className="text-lg">
                        Add
                    </PrimaryButton>
                </div>


                <InputError className="mt-1" message="student-name" />

            </div>

        </form>

    );
}