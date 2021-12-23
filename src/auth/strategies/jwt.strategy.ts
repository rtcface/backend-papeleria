import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy,ExtractJwt } from 'passport-jwt';
import { JWT_SECRET_TOKEN } from 'src/server.constants';
import { User } from 'src/users/interfaces';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JWT_SECRET_TOKEN,
        });
    }

    async validate(payload:{ id: string }): Promise< User | null > {
                // console.log('pase por validate jwt ---> '+payload.id );
       
      const user = await this.authService.validate(payload.id);
        if (user) {
            return user;
        }
        return null;
    }
}