import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { RegisterUserInput } from './dto';
import { UserToken } from './dto';
import { AuthService } from './auth.service';
import { LoginAuthInput } from './inputs';


@Resolver()
export class AuthResolver {

    constructor(private readonly authService:AuthService ){ }

    @Mutation(() => UserToken)
    async Register( @Args('userInput') userInput: RegisterUserInput ) {           
           return this.authService.register(userInput);
    }

    @Mutation(() => UserToken)
    async Login( @Args('loginInput') loginInput: LoginAuthInput ) {           
           return this.authService.login(loginInput);
    }   
    

}
