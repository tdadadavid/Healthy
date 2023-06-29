import * as dotenv from "dotenv";

dotenv.config();


export const config = Object.freeze({
    port: parseInt(process.env.PORT!),
    appEnvironment: process.env.NODE_ENV as string,
    mail: {
        globalFrom: process.env.MAIL_FROM as string,
    },
    auth: {
        jwt: {
            access_token: process.env.ACCESS_TOKEN as string,
            access_token_secret: process.env.ACCESS_TOKEN_SECRET as string,
            refresh_token: process.env.REFRESH_TOKEN as string,
            refresh_token_secret: process.env.REFRESH_TOKEN_SECRET as string,
        },
    },
    db: {
        dbUser: process.env.DATABASE_USER as string ,
        dbPassword: process.env.DATABASE_PASSWORD as string,
        dbHost: process.env.DATABASE_HOST as string ,
        dbPort: process.env.DATABASE_PORT as string,
        dbPool: process.env.DATABASE_POOL as string,
        dbName: process.env.DATABASE_NAME as string
    },
});
