import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [UsersModule, ProductsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
