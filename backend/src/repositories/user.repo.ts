import { Service } from "typedi";
import { IUser } from "../api/interfaces/user.interface";
import UserModel from "../models/user.model";

@Service()
export class UserRepo {

    async createUser(data: Partial<IUser>) {
        return UserModel.create({
            email: data.email,
            password: data.password,
            otp: data.otp,
            firstname: data.email?.split("@")[0],
            username: data.email?.split("@")[0],
            verified: false,

        });
    }

    async findById(id: string) {
        return UserModel.findById(id);
    }

    async findByEmail(email: string) {
        return UserModel.findOne({ email });
    }

    async findByEmailAndOtp(otp: Number, email: string) {
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
    
        return UserModel.find({
            "otp.code": otp,
            email: email,
            "otp.createdAt": { $gte: tenMinutesAgo }
        });
    }
    

}