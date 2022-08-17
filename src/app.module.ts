import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerService } from './service/owner/owner.service';
import { OwnerController } from './controller/owner/owner.controller';
import { OwnerSchema } from './schema/owner.schema';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'car-monitoring'}),
    MongooseModule.forRoot(
      'mongodb+srv://denis:.h9YcDSaK-tW4v5@car-monitoring.kmfka6n.mongodb.net/test',
      { dbName: 'car-monitoring' },
    ),
    MongooseModule.forFeature([{ name: 'Owner', schema: OwnerSchema }]),
  ],
  controllers: [AppController, OwnerController],
  providers: [AppService, OwnerService],
})
export class AppModule {}
