import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesModule } from './properties/properties.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, PropertiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
