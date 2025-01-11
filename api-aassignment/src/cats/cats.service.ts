import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CatsService {
  private readonly apiKey = 'live_tuexpRtvAbtmrLPzljmrTever1AGZPv6mR3wwbWkXF4P3VWITnKgdtqh6NP5imcV';
  private readonly baseUrl = 'https://api.thecatapi.com/v1';

  constructor(private readonly httpService: HttpService) {}

  async getRandomCat() {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/images/search`, {
        headers: {
          'x-api-key': this.apiKey,
        },
      })
    );
    return data[0];
  }

  async getCatsByBreed(breedId: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/images/search`, {
        params: {
          breed_ids: breedId,
          limit: 10,
        },
        headers: {
          'x-api-key': this.apiKey,
        },
      })
    );
    return data;
  }

  async getBreeds() {
    try {
      console.log('Attempting to fetch breeds...');
      const { data } = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/breeds`, {
          headers: {
            'x-api-key': this.apiKey,
          },
        })
      );
      console.log('Response:', data);
      return data;
    } catch (error) {
      console.error('Error fetching breeds:', error.response?.data || error.message);
      throw error;
    }
  }
} 