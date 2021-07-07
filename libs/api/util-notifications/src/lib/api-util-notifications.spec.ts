import { sendNotification } from './api-util-notifications';

describe('sendNotification', () => {
  it('should work', () => {
    expect(sendNotification('test')).toEqual(
      'sending notification to client: test'
    );
  });
});
