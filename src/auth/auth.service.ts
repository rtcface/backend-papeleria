import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterUserInput } from './dto';
import { UsersService } from '../users/users.service';
import { UserToken } from './dto';
import { LoginAuthInput } from './inputs';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'; 

@Injectable()
export class AuthService {
    constructor(private readonly userService:UsersService,
         private readonly jwtService: JwtService,) {}

    public async register(userInput:RegisterUserInput): Promise<UserToken> {

        const {name,email,password} = userInput;

        const found = await this.userService.findUserByEmail(userInput.email);

        const salt = await bcrypt.genSaltSync(10);

        const hash = await bcrypt.hash(password, salt)

        if (found) {
            throw new BadRequestException(`User with email ${userInput.email} already exists`);
        }
        const register = {
            name,
            email,
            password:hash
        } as RegisterUserInput;

        const create = await this.userService.create(register);

        return { user: create, token: this.singToken(create._id) };
     
    }

    public async login(loginInput:LoginAuthInput): Promise<UserToken> {
        const user = await this.userService.findUserByEmail(loginInput.email);
        if (!user) {
            throw new BadRequestException(`User with email ${loginInput.email} does not exist`);
        }
        const isValid = await bcrypt.compare(loginInput.password, user.password);
        if (!isValid) {
            throw new BadRequestException(`Password is incorrect`);
        }
        return { user, token: this.singToken(user._id) };
    }

    private singToken(id:string):string {
        return this.jwtService.sign({ id });
    }

    public async validateUser(email:string,password:string): Promise<UserToken | null> {
        const user = await this.userService.findUserByEmail(email);
        if (!user) {
            return null;
        }
        if (user.password !== password) {
            return null;
        }
        return { user, token: this.singToken(user._id) };   
    }

    public async validate( payload:{sub:string}): Promise<any> {
        return await this.userService.findUserByEmail(payload.sub);
    }
}
