import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserStatus, UserRole } from './user.enums';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({
    type: 'json',
    default: () => "'[\"USER\"]'",
  })
  roles: UserRole[];

  @Column({
    type: 'text',
    default: UserStatus.ENABLED,
  })
  status: UserStatus;
}

