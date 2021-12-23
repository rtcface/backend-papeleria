
import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards';

import { UsersService } from './users.service';


@Resolver()
export class UsersResolver {

    constructor(private userService: UsersService) {  }
    @UseGuards(GqlAuthGuard)
    @Query( () => String)
    async Welcome() {
        return 'Welcome to app csip!!!!';
    }

   

   
    
}
