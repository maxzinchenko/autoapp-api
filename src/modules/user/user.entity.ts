import { Table, Column, Default, IsUUID, PrimaryKey, AllowNull, Unique, Length, Index, IsUrl, Is, DefaultScope, Scopes, Model, DataType } from 'sequelize-typescript';

@DefaultScope(() => ({
  attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
}))

@Scopes(() => ({
  full: {
    attributes: { exclude: [] }
  }
}))

@Table({
  tableName: 'users',
  modelName: 'User',
  paranoid: true,
  timestamps: true,
  indexes: [{
    unique: true,
    fields: ['username', 'phone']
  }]
})
export class User extends Model<User> {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  public readonly id: string;

  @Is(/^[\dA-Za-z]+$/)
  @Length({ min: 5, max: 25 })
  @AllowNull(false)
  @Unique
  @Index
  @Column(DataType.STRING(25))
  public username: string;

  @Is(/^(\+|)\d*$/g)
  @Length({ min: 10, max: 13 })
  @AllowNull(false)
  @Unique
  @Index
  @Column(DataType.STRING(13))
  public phone: string;

  @IsUrl
  @Length({ min: 0, max: 300 })
  @AllowNull
  @Column(DataType.STRING(300))
  public avatar: string;

  @Length({ min: 3, max: 50 })
  @AllowNull
  @Column(DataType.STRING(50))
  public firstName: string;

  @Length({ min: 3, max: 50 })
  @AllowNull
  @Column(DataType.STRING(50))
  public lastName: string;
}
