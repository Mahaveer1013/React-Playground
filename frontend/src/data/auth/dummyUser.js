import { UserRole } from "../../interfaces/auth/auth.interface";

export const dummyUser = {
    _id: "1",
    email: 'a@gmail.com',
    role: UserRole.ADMIN, // Example: User role is set as ADMIN
};

export const initialState = {
    user: null,
};