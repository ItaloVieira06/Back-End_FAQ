import { Test, TestingModule } from '@nestjs/testing';
import { AwsnerService } from './awsner.service';

describe('AwsnerService', () => {
  let service: AwsnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwsnerService],
    }).compile();

    service = module.get<AwsnerService>(AwsnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
