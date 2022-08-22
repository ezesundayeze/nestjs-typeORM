import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from './posts/entities/post.entity';
import { PostsModule } from './posts/posts.module';

const config: SqliteConnectionOptions = {
  type: "sqlite",
  database: "../db",
  entities: [Post],
  synchronize: true
}

@Module({
  imports: [PostsModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
