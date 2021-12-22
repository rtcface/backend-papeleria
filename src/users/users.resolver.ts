
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {

    @Query( () => String)
    async Welcome() {
        return 'Welcome to app csip!!!!';
    }
    
}
