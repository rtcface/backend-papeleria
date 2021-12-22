
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserToken } from '../dto/user-auth.dto';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor( private readonly authService:AuthService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
    }

    async validate(email:string,password:string): Promise<UserToken>{

        const user = await this.authService.validateUser(email,password);
        if(!user){
            throw new Error('Invalid credentials');
        }
        return user;
    }
}