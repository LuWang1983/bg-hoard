import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getAllGames', () => {
    it('should return game count of 3', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getAllGames().length).toEqual(3);
    });
  });
});
