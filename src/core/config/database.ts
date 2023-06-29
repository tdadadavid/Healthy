import { Sequelize } from 'sequelize';
import { config } from './config';

// Postgres implementation
export const sequelize = new Sequelize(
    config.db.dbName,
    config.db.dbUser,
    config.db.dbPassword,
    {
        port: 5432,
        host: config.db.dbHost,
        dialect: 'postgres',
    }
);