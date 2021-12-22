import { PassportStrategy } from '@nestjs/passport';
import { Strategy,ExtractJwt } from 'passport-jwt';
import { JWT_SECRET_TOKEN } from 'src/server.constants';
import { AuthService } from '../auth.service';


export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: JWT_SECRET_TOKEN,
        });
    }

    async validate(payload: any): Promise<any> {
        await this.authService.validate(payload);
        
    }
}