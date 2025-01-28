import { JsonController } from "routing-controllers";
import { Service } from "typedi";
import { Logger } from "../../utils/logger";
import { BaseController } from "./base.controller";

@Service()
@JsonController("/user")
export class UserController extends BaseController {

    constructor(
        protected logger: Logger,
        // private userService: UserService,
        // private jwtService: JwtService,
    ) {
        super(logger);
    }

    // @Post("/email-login")
    // async emailLogin(
    //     @Body() data: EmailRequest
    // ): Promise<ServiceResponse<string>> {
    //     try {
    //         await this.userService.create(data);
    //         return this.returnSuccess(null, "OTP sent Successfully");
    //     } catch (error: any) {
    //         return this.returnError(error);
    //     }
    // }

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