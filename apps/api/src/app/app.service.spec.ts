import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  xdescribe('getGame', () => {
    it('should return the respective game by id', () => {
      expect(service.getGame('settlers-in-the-can')).toEqual({
        id: 'settlers-in-the-can',
        name: 'Settlers in the Can',
        image: '/assets/beans.png', // 'https://media.giphy.com/media/xUNda3pLJEsg4Nedji/giphy.gif',
        description:
          'Help your bug family claim the best real estate in a spilled can of beans.',
        price: 35,
        rating: Math.random(),
      });

      expect(service.getGame('chess-pie')).toEqual({
        id: 'chess-pie',
        name: 'Chess Pie',
        image: '/assets/chess.png', // 'https://media.giphy.com/media/iCZyBnPBLr0dy/giphy.gif',
        description: 'A circular game of Chess that you can eat as you play.',
        price: 15,
        rating: Math.random(),
      });

      expect(service.getGame('purrfection')).toEqual({
        id: 'purrfection',
        name: 'Purrfection',
        image: '/assets/cat.png', // 'https://media.giphy.com/media/12xMvwvQXJNx0k/giphy.gif',
        description: 'A cat grooming contest goes horribly wrong.',
        price: 45,
        rating: Math.random(),
      });
    });
    describe('getAllGames', () => {
      it('should return game count of 3', () => {
        expect(service.getAllGames().length).toEqual(3);
      });
    });
  });
});
