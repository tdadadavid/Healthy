import { createServer } from "http";

import {config} from "../core";
import { app } from "./app.service";
import { disPatchWithoutValues } from "./events";

export const startApp = async () => {
    const server = createServer(app);
    server.listen(config.port, () => disPatchWithoutValues("app:up"))
}
