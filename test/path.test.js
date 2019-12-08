import { configGet } from '../src/common/configGet';

test('verify pattern config file (GET) is valid', () => {
    configGet.forEach((config) => {
        expect(config.file).toMatch(/^.+.json$/);
        expect(config.path).toMatch(/^\/([^?\/]+)/);
    });
});