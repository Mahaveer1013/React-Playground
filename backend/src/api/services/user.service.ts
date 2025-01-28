import { Service } from "typedi";
import { UserRepo } from "../../repositories/user.repo";
import { IUser } from "../interfaces/user.interface";
import { EmailRequest } from "../interfaces/auth.interface";
import { generateRandomOTP } from "../../utils/generateRandom";

@Service()
export class UserService {
    constructor(
        private readonly userRepo: UserRepo // Dependency injection for UserRepo
    ) { }

    async createUser(data: EmailRequest): Promise<IUser> {
        try {
            const existingUser = await this.userRepo.findByEmail(data.email);
            if (existingUser) {
                throw new Error("Email already exists");
            }
            const otp = {
                code: generateRandomOTP(),
                createdAt: new Date(),
                type: 2
            }
            const user = await this.userRepo.createUser({...data, otp: otp});
            return user;
        } catch (error: any) {
            throw error;
        }
    }

    async getUserById(userId: string) {
        try {
            const user = await this.userRepo.findById(userId);
            return user;
        } catch (error: any) {
            throw error;
        }
    }

    async verifyOTP(otp: Number, email:string) {
        try {
            const user = await this.userRepo.findByEmailAndOtp(otp, email);
            return user;
        } catch (error: any) {
            throw error;
        }
    }

}
