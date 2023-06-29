import { logger } from "../logging";

export const gracefullyShutdown = async (error: unknown) => {
    logger.info("UNEXPECTED_APP_ERROR", error);
    process.exit(1);
}