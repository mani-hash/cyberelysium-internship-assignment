export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Student {
    id: number;
    name: string;
    age: number;
    status: boolean;
    image: string|null;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
