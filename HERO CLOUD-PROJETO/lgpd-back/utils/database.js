import { Sequelize, Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'lgpd-database',
    'root',
    '12345678',
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        define: {
            timestamps: false
        }
    }
);

export default sequelize;