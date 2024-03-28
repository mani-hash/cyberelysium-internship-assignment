import { ReactNode } from "react";

// Table component
export function Table({ className = '', children } : { className? : string, children: ReactNode}): ReactNode {
    return(
        <table className={className}>
            {children}
        </table>
    );
}

// Table body component
export function TableBody({className = '', children} : {className?: string, children: ReactNode}): ReactNode {
    return (
        <tbody className={className}>
            { children }
        </tbody>
    );
}

// Table heading component for displaying table heading
export function TableHeading(
    { headings, className = '', heading_styles = '' }:
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

// Tablee row component for displaying table row
export function TableRow({ className = '', children } : { className?: string, children: ReactNode }): ReactNode {
    return (
        <tr className={className}>
            {children}
        </tr>
    );
}