import { Link } from "@inertiajs/react";

export default function PaginatorLinks(
    { className = '', prev_page, next_page } : 
    { className?: string, prev_page: string|null, next_page: string|null}
) {
    const link_states : {prev : JSX.Element, next: JSX.Element} = {
        prev: <button type="button" className={className} disabled>Prev</button>,
        next: <button type="button" className={className} disabled>Next</button>,
    }

    if (prev_page !== null) {
        link_states.prev = <Link className={className} href={prev_page}>Prev</Link>;
    }

    if (next_page !== null) {
        link_states.next = <Link className={className} href={next_page}>Next</Link>;
    }

    return (
        <>
            {link_states.prev}
            {link_states.next}
        </>
    );
}