
import { Query, Resolver } from '@nestjs/graphql';

import { UsersService } from './users.service';


@Resolver()
export class UsersResolver {

    constructor(private userService: UsersService) {  }

    @Query( () => String)
    async Welcome() {
        return 'Welcome to app csip!!!!';
    }

   

   
    
}
