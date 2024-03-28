export default function Status({status, className} : {status: boolean, className?: string}) {

    let color: string = "bg-red-500";
    let text: string = "Inactive";

    if (status) {
        color = "bg-green-600";
        text = "Active";
    }

    return (
        <span className={`${color} ${className}`}>
            {text}
        </span>
    );
}