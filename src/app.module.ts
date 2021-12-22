import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    SalesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_CNN),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),    
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
