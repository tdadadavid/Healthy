import { createServer } from "http";

import {config, logger} from "../core";
import { app } from "./app.service";

export const startApp = () => {
    const server = createServer(app);
    server.listen(config.port, () => {
        logger.info(`Server running on port ${config.port}`)
    })
}
