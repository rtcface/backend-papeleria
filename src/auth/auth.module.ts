import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET_TOKEN } from 'src/server.constants';


@Module({
  imports: [UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: JWT_SECRET_TOKEN,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, AuthResolver]
})
export class AuthModule {}
