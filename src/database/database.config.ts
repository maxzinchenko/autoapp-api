import { Op, Options } from 'sequelize';

type DatabaseConfig = {
  development: Options;
  test: Options;
  production: Options
};

const commonConfig: Options = {
  username: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: true,
  operatorsAliases: Op
};

export const databaseConfig: DatabaseConfig = {
  development: {
    ...commonConfig,
    database: 'autoapp_development'
  },
  test: {
    ...commonConfig,
    database: 'autoapp_test'
  },
  production: {
    ...commonConfig,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOST
  }
};
