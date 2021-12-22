export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    status: string;
    avatar: string;
    role: string;
    createByGoogle: boolean;
}
