import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { userSchema } from './schemas';

@Module({
  imports: [ MongooseModule.forFeature([ { name:'User', schema: userSchema } ]) ],
  providers: [UsersResolver, UsersService],
  exports: [UsersService]
})
export class UsersModule {}

