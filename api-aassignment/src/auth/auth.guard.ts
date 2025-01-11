import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];

    if (!apiKey || apiKey !== 'live_tuexpRtvAbtmrLPzljmrTever1AGZPv6mR3wwbWkXF4P3VWITnKgdtqh6NP5imcV') {
      throw new UnauthorizedException();
    }

    return true;
  }
} 