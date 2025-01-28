import { Logger } from "../../utils/logger"; // Import Logger service
import { Service } from "typedi";
import { JsonController } from "routing-controllers";
import { ServiceResponse } from "../interfaces/base.interface";

@Service() // Makes this class injectable with TypeDI
@JsonController() // It is a controller but typically used as a base class
export class BaseController {
    protected logger: Logger; // Logger instance to be injected into subclasses

    constructor(logger: Logger) {
        this.logger = logger; // Dependency injection for logger
    }

    // A success response format that all controllers will use
    protected returnSuccess(data: any, message:string): ServiceResponse<any> {
        this.logger.info("Successful response: " + JSON.stringify(data)); // Log the success
        return {
            status: "success",
            data: data,
            message: message,
        };
    }

    // A common error response format that all controllers will use
    protected returnError(error: any, message?: string): ServiceResponse<any> {
        this.logger.error("Error occurred: " + error.message || error); // Log the error
        return {
            status: "error",
            data: null,
            message: message || "Something went wrong",
        };
    }

    // A response for cases when headers are missing or incorrect
    protected returnHeaderError(): ServiceResponse<any> {
        this.logger.warn("Missing or invalid headers."); // Log a warning
        return {
            status: "error",
            data: null,
            message: "Missing or invalid authorization headers",
        };
    }
}
