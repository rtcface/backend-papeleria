import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RegisterAuthInput {
    @Field()
    name: string;
    @Field()
    email: string;
    @Field()
    password: string;
}