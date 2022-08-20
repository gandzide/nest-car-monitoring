import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerService } from './service/owner.service';
import { OwnerController } from './controller/owner.controller';
import { OwnerSchema } from './schema/owner.schema';
import { CarSchema } from './schema/car.schema';
import { InsuranceSchema } from './schema/insurance.schema';
import { InsuranceController } from './controller/insurance.controller';
import { CarController } from './controller/car.controller';
import { InsuranceService } from './service/insurance.service';
import { CarService } from './service/car.service';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'car-monitoring'}),
    MongooseModule.forRoot(
      'mongodb+srv://denis:.h9YcDSaK-tW4v5@car-monitoring.kmfka6n.mongodb.net/test',
      { dbName: 'car-monitoring' },
    ),
    MongooseModule.forFeature([
      { name: 'Owner', schema: OwnerSchema },
      { name: 'Car', schema: CarSchema },
      { name: 'Insurance', schema: InsuranceSchema }
    ]),
  ],
  controllers: [AppController, OwnerController, InsuranceController, CarController],
  providers: [AppService, OwnerService, InsuranceService, CarService],
})
export class AppModule {}
