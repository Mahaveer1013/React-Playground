import { Body, HeaderParams, JsonController, Post, Req } from "routing-controllers";
import { Service } from "typedi";
import { Logger } from "../../utils/logger";
import { BaseController } from "./base.controller";
import { ServiceResponse } from "../interfaces/base.interface";
import { EmailRequest } from "../interfaces/auth.interface";
import { UserService } from "../services/user.service";

@Service()
@JsonController("/")
export class AuthController extends BaseController {

    constructor(
        protected logger: Logger,
        // private jwtService: JwtService,
        private userService: UserService,
    ) {
        super(logger);
    }

    @Post("/email-login")
    async emailLogin(
        @Body() data: EmailRequest
    ): Promise<ServiceResponse<string>> {
        try {
            await this.userService.createUser(data);
            return this.returnSuccess(null, "OTP sent Successfully");
        } catch (error: any) {
            return this.returnError(error);
        }
    }

    
    @Post("/verify-otp")
    async verifyOtp(
        @Body() data: {otp: string}
    ): Promise<ServiceResponse<string>> {
        try {
            await this.userService.verifyOTP(Number(data.otp), "email");
            return this.returnSuccess(null, "OTP sent Successfully");
        } catch (error: any) {
            return this.returnError(error);
        }
    }

    // @Post("/google-login")
    // async googleLogin(
    //     @HeaderParams() params: any
    // ): Promise<ServiceResponse<string>> {
    //     try {
    //         if (params.authorization) {
    //             const decodedData = await this.jwtService.validateToken(
    //                 params.authorization
    //             );
    //             return this.returnSuccess(JSON.stringify(decodedData.data));
    //         } else {
    //             return this.returnHeaderError();
    //         }
    //     } catch (error: any) {
    //         return this.returnError(error);
    //     }
    // }
}