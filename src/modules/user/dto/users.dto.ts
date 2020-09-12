import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  readonly id?: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly phone: string;

  @ApiProperty({ required: false })
  readonly avatar?: string;

  @ApiProperty({ required: false })
  readonly firstName?: string;

  @ApiProperty({ required: false })
  readonly lastName?: string;
}
