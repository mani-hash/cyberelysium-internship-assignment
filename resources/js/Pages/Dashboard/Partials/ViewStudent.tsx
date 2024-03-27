import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Status from "@/Components/Status";
import { ReactNode } from "react";

const edit_svg: ReactNode = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="pr-2"
        width="20"
        height="20"
        viewBox="0 0 256 256"
    >
        <path
            fill="#fdfdfd"
            strokeMiterlimit="10"
            d="M47.16 21.221l-5.91-.966a16.933 16.933 0 00-1.411-3.405l3.45-4.917a1.001 1.001 0 00-.112-1.282l-3.889-3.887a1 1 0 00-1.291-.104l-4.843 3.481a16.774 16.774 0 00-3.432-1.427l-1.031-5.886A1 1 0 0027.706 2h-5.5a1 1 0 00-.987.839l-.956 5.854c-1.2.345-2.352.818-3.437 1.412l-4.83-3.45a1 1 0 00-1.289.106L6.82 10.648a.998.998 0 00-.112 1.28l3.399 4.863a16.937 16.937 0 00-1.438 3.46l-5.831.971a1 1 0 00-.836.986v5.5a1 1 0 00.825.985l5.831 1.034a16.853 16.853 0 001.438 3.46L6.655 38c-.284.397-.239.942.106 1.289l3.888 3.891a1 1 0 001.281.112l4.87-3.411a16.871 16.871 0 003.445 1.424l.976 5.861a.997.997 0 00.985.834h5.5c.485 0 .9-.348.984-.825l1.045-5.89a16.816 16.816 0 003.43-1.435l4.905 3.441a.999.999 0 001.282-.111l3.888-3.891a1 1 0 00.104-1.292l-3.498-4.857a16.74 16.74 0 001.407-3.408l5.918-1.039a1 1 0 00.827-.985v-5.5a.998.998 0 00-.838-.987zM25 32a7 7 0 110-14 7 7 0 010 14z"
            fontFamily="none"
            fontSize="none"
            fontWeight="none"
            textAnchor="none"
            transform="scale(5.12)"
        ></path>
    </svg>
);

const delete_svg: ReactNode = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="pr-2"
        width="20"
        height="20"
        viewBox="0 0 256 256"
    >
        <path
            fill="#fdfdfd"
            strokeMiterlimit="10"
            d="M14.984 2.486A1 1 0 0014 3.5V4H8.5a1 1 0 00-1.014 1H6a1 1 0 100 2h18a1 1 0 100-2h-1.486A1 1 0 0021.5 4H16v-.5a1 1 0 00-1.016-1.014zM6 9l1.793 15.234A1.997 1.997 0 009.777 26h10.446a1.998 1.998 0 001.984-1.766L24 9z"
            fontFamily="none"
            fontSize="none"
            fontWeight="none"
            textAnchor="none"
            transform="scale(8.53333)"
        ></path>
    </svg>
);

export default function ViewStudent() {

    const headings: Array<string> = [
        "ID", "Name", "Age", "Image", "Status", "Edit", "Delete"
    ];

    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border border-slate-300 rounded-xl text-center border-spacing-5">
                <TableHeading headings={headings} className="bg-gray-700 text-gray-100" />

                <tbody>
                    <TableRow
                        className="border border-slate-200 hover:bg-gray-200"
                        id={1}
                        name="Manimehalan Thiyagarajan"
                        age={21}
                        status={true}
                    />

                    <TableRow
                        className="border border-slate-200 hover:bg-gray-200"
                        id={2}
                        name="Shane"
                        age={18}
                        status={true}
                    />

                    <TableRow
                        className="border border-slate-200 hover:bg-gray-200"
                        id={3}
                        name="Mc Mahn"
                        age={17}
                        status={false}
                    />
                    
                </tbody>
            </table>
        </div>
    );
}

function TableHeading(
    { headings, className = '', heading_styles = 'py-3 px-4 uppercase font-semibold text-sm' }:
    { headings: Array<string>, className?: string, heading_styles?: string }
): ReactNode {
    return (
        <thead className={className}>
            <tr>
                {headings.map(heading => (
                    <th key={heading} className={heading_styles}>
                        {heading}
                    </th>
                ))}

            </tr>
        </thead>
    );
}

function TableRow(
    { className, id, name, age, image, status} :
    {className? : string, id: Number, name: string, age: Number, image?: string, status: boolean} 
): ReactNode {

    return (
        <tr className={className}>
            <td className="py-3 px-4 text-lg">{id.toString()}</td>
            <td className="py-3 px-4 text-lg">{name}</td>
            <td className="py-3 px-4 text-lg">{age.toString()}</td>
            <td className="py-3 px-4 text-lg">
                <PrimaryButton>
                    View
                </PrimaryButton>
            </td>
            <td className="py-3 px-4 text-lg">
                <Status status={status} className="px-4 py-2 rounded-full text-white" />
            </td>
            <td className="py-3 px-4 text-lg">
                <SecondaryButton
                    type="button"
                    className="bg-gray-600 text-slate-100 font-extrabold hover:bg-gray-500 hover:text-slate-300">
                    {edit_svg}
                    Edit
                </SecondaryButton>
            </td>
            <td className="py-3 px-4 text-lg">
                <DangerButton
                    type="button"
                >
                    {delete_svg}
                    Delete
                </DangerButton>
            </td>
        </tr>
    );
}

function ViewImage() {

}