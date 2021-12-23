import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces';
import { RegisterUserInput } from '../auth/dto';


@Injectable()
export class UsersService {
    constructor( @InjectModel('User') private readonly usersModel: Model<User> ) { }

    async create(userIuput:RegisterUserInput): Promise<User> {
        const createdUser = new this.usersModel(userIuput);
        return await createdUser.save();
    }

    async findUserByEmail(email:string): Promise<User> {
        return await this.usersModel.findOne({email:email});
    }

    async findUserById(id:string): Promise<User> {
        return await this.usersModel.findById(id);
    } 

    async getUsers(): Promise<User[]> {
        const users = await this.usersModel.find().exec();
        users.map(user=>{
            delete user.password;
            return user;
        });
        
        return users;
    }
}
