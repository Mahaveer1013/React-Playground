import { Service } from "typedi";
import * as winston from "winston";

const { createLogger, format, transports } = winston;
const { combine, timestamp, json, colorize } = format;

const consoleLogFormat = format.combine(
    format.colorize(),
    format.printf(({ level, message }) => {
        return `${level}: ${message} }`;
    })
);

@Service()
export class Logger {
    private logger: winston.Logger;

    constructor() {
        this.logger = createLogger({
            level: "info",
            format: combine(colorize(), timestamp(), json()),
            transports: [
                new transports.Console({
                    format: consoleLogFormat,
                }),
                new transports.File({ filename: "app.log" }),
            ],
        });
    }

    public debug(message: string, ...args: any[]): void {
        this.logger.debug(message, args);
    }

    public info(message: string, ...args: any[]): void {
        this.logger.info(message, args);
    }

    public warn(message: string, ...args: any[]): void {
        this.logger.warn(message, args);
    }

    public error(message: string, ...args: any[]): void {
        this.logger.error(message, args);
    }
}