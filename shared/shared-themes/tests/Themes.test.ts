import { Colors } from '~/src/colors';

describe('Themes', () => {
  test('Theme Dark exists', () => {
    expect(Colors.dark).not.toBeNull();
  });
});
