import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
// Remove the @UseGuards(AuthGuard) temporarily for testing
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('random')
  getRandomCat() {
    return this.catsService.getRandomCat();
  }

  @Get('breeds')
  getBreeds() {
    return this.catsService.getBreeds();
  }

  @Get('breed/:breedId')
  getCatsByBreed(@Param('breedId') breedId: string) {
    return this.catsService.getCatsByBreed(breedId);
  }
} 