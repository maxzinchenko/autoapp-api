import { ModelCtor, Model, Sequelize } from 'sequelize-typescript';

import { databaseConfig } from '../../../config/database.config';

import { User } from '../../modules/user/user.entity';

export const databaseProviders = [{
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize(databaseConfig[process.env.NODE_ENV]);

    sequelize.addModels([User]);

    await sequelize.sync();

    return sequelize;
  }
}];
