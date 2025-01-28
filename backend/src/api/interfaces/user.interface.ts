export interface IUser {
    firstname: string;
    middlename: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    otp: {
        code: string,
        createdAt: Date,
        type: number
    };
    verified: boolean;
}

export interface UserDocument extends IUser {
    _id: string;
}
