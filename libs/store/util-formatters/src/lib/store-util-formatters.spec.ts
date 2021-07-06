import { formatRating } from './store-util-formatters';

describe('storeUtilFormatters', () => {
  it('should work', () => {
    expect(formatRating(0.234211)).toEqual('2.3 / 10');
  });
});
