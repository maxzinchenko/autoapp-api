import { Table, Column, IsUUID, PrimaryKey, AllowNull, Unique, Length, Index, IsUrl, DefaultScope, Scopes, Model } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@DefaultScope(() => ({
  attributes: { exclude: ['createdAt', 'updatedAt'] }
}))

// @Scopes(() => ({
//   full: {
//     include: [Manufacturer]
//   },
//   yellow: {
//     where: { primaryColor: 'yellow' }
//   }
// }))

@Table({
  tableName: 'users',
  modelName: 'User',
  timestamps: true,
  indexes: [{
    unique: true,
    fields: ['username', 'phone']
  }]
})
export class User extends Model<User> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  public readonly id: string;

  @ApiProperty({ example: 'qwery', description: 'Username', required: true, type: 'string' })
  @Length({ min: 4, max: 25 })
  @AllowNull(false)
  @Unique
  @Index
  @Column
  public username: string;

  @ApiProperty({ example: '5555555555', description: 'Phone', required: true, type: 'string' })
  @Length({ min: 11, max: 14 })
  @AllowNull(false)
  @Unique
  @Index
  @Column
  public phone: string;

  @ApiProperty({ example: 'file', description: 'Avatar', required: false, type: 'file' })
  @IsUrl
  @Length({ min: 0, max: 300 })
  @AllowNull
  @Column
  public avatar: string;

  @ApiProperty({ example: 'John', description: 'First Name', required: false, type: 'string' })
  @Length({ min: 3, max: 50 })
  @AllowNull
  @Column
  public firstName: string;

  @ApiProperty({ example: 'Smith', description: 'Last Name', required: false, type: 'string' })
  @Length({ min: 3, max: 50 })
  @AllowNull
  @Column
  public lastName: string;
}
