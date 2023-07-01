import { ExtractParams, mail } from "../../core";

/**
 * Events Helper types
*/
export type AppEventListnerMap = EvMapParams
export type eventKeys = keyof typeof evMap;
type EvMapParams = {
  [K in keyof typeof evMap]: ExtractParams<typeof evMap[K]>;
};





/**
 * Event Listener Registry.
 */
export const evMap = {
  "app:up": () => console.log("Server started successfully"),
  "auth:forget:password": [
      (p: {x: number})  => { return 0; },
  ],
  "appointment:booked": (p: string) => mail.send(p as any),
  "user:joined:community": (p: string, q: number) => mail.send(p as any),
} 







