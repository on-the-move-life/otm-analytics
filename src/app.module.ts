import { Inject, Module } from '@nestjs/common';
// import { ClientModule } from './client/client.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './clients/clients.module';
import { UserModule } from './user/user.module';
import { WorkoutSummaryModule } from './workout-summary/workout-summary.module';
import { ClientsService } from './clients/clients.service';


@Module({
  imports: [
    // setting env variable
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:[".local.env"]         
    }),
    // establishing mongo connection
    // before mongooseModule ... configModule and configService is injected to fetch uri fron env
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(configService:ConfigService)=>({uri:configService.get("MONGO_URI")}),
      inject:[ConfigService]
    }),
    ClientsModule,
    WorkoutSummaryModule
  ],
  controllers: [],
  providers: [],
  
})
export class AppModule {
  constructor(){
    // console.log('App Module')
  }
}
