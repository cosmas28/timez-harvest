import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';

@Module({
  imports: [],
  controllers: [AppController, ProjectController],
  providers: [AppService, ProjectService],
})
export class AppModule {}
