import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Exclude, Expose } from 'class-transformer';

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  avatar_url: string;

  @CreateDateColumn()
  created_at: Date;

  @Expose({ name: 'avatar' })
  getAvatarUrl(): string {
    switch (process.env.disk) {
      case 'local':
        return `${process.env.APP_API_URL}/avatar/${this.avatar_url}`;
      case 's3':
        return `${process.env.AWS_BUCKET_URL}/avatar/${this.avatar_url}`;
      default:
        return null;
    }
  }

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
