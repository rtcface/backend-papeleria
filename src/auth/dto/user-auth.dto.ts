import { ObjectType, Field } from '@nestjs/graphql';
import { CreateUserDto } from "src/users/dto";

@ObjectType()
export class UserToken {
    @Field()
    readonly token: string;
    @Field()
    readonly user: CreateUserDto;
    
}