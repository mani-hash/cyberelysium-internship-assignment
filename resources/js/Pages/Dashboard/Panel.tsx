import AddStudent from "./Partials/AddStudent";
import ViewStudent from "./Partials/ViewStudent";


export default function Panel({ className = ''} : {className? : string}) {
    return (
        <div className={className}>
            <div className="px-1 py-4 sm:px-4 space-y-2">
                <AddStudent />
            </div>

            <div className="px-1 py-4 sm:px-4 space-y-2">
                <ViewStudent />

            </div>
        </div>
    );
}