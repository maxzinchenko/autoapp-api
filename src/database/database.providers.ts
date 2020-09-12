import { Sequelize } from 'sequelize-typescript';

import { databaseConfig } from './database.config';

import { User } from '../modules/user/user.entity';

export const databaseProviders = [{
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize(databaseConfig[process.env.NODE_ENV]);

    // @ts-ignore
    sequelize.addModels([User]);

    await sequelize.sync();

    return sequelize;
  }
}];
