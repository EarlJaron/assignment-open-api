import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  imports: [HttpModule],
  controllers: [CatsController],
  providers: [CatsService, AuthGuard],
})
export class CatsModule {} 