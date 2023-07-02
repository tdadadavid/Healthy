import { logger, mail } from "../../core";


/**
 * Event Listener Registry.
 */
export const register = {
  "app:up": () => logger.info("Server started successfully"),
  "auth:forget:password": [
      (p: {x: number})  => { return 0; },
  ],
  "appointment:booked": (p: string) => mail.send(p as any),
  "user:joined:community": (p: string, q: number) => mail.send(p as any),
  "event:registeration:succesful": () => logger.info("Events listeners registered")
} 







