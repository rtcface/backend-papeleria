import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class QueryUsersDto {
    @Field(() => ID)
    readonly _id: string;
    @Field()
    readonly name: string;
    @Field()
    readonly email: string; 
    @Field()
    readonly createdAt: Date;
    @Field()
    readonly status: string;
    @Field()
    readonly role: string;
    @Field()
    readonly avatar: string;
    @Field()
    readonly createByGoogle: boolean;
}