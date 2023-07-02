import { sendForgotPassword } from "../../auth";
import { logger } from "../../core";


/**
 * Event Listener Registry.
 */
export const register = {
  "app:up": () => logger.info("Server started successfully"),
  "event:registeration:succesful": () => logger.info("Events listeners registered"),
  "auth:user:forgotpassword": sendForgotPassword.handle
}; 