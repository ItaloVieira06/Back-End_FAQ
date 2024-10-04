import { Test, TestingModule } from '@nestjs/testing';
import { AwsnerController } from './awsner.controller';
import { AwsnerService } from './awsner.service';

describe('AwsnerController', () => {
  let controller: AwsnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AwsnerController],
      providers: [AwsnerService],
    }).compile();

    controller = module.get<AwsnerController>(AwsnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
