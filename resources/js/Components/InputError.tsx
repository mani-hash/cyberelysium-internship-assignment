import { HTMLAttributes } from 'react';

export default function InputError({ message, className = '', ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    const error_svg = (
        <svg
            className="w-4 h-4 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 32 32"
            overflow="visible"
            viewBox="0 0 32 32"
            >
            <g>
                <g>
                <circle cx="16" cy="16" r="16" fill="#D72828"></circle>
                <path fill="#E6E6E6" d="M14.5 25h3v-3h-3v3zm0-19v13h3V6h-3z"></path>
                </g>
            </g>
        </svg>
    );

    return message ? (
        <p {...props} className={'text-sm text-red-600 inline-block content-center' + className}>
            { error_svg } { message }
        </p>
    ) : null;
}
