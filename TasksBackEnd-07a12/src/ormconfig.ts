import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './users/user.entity';

export const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 3306),
  username: process.env.DB_USERNAME ?? 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE ?? 'atividades_prog',
  entities: [User],
  synchronize: true, // só para estudo local
};
