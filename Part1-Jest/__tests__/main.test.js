const formatVolumeIconPath = require('../assets/scripts/main');

describe('test volume', () => {
    test('muted', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });
    test('level 1', () => {
        expect(formatVolumeIconPath(20)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });

    test('level 2', () => {
        expect(formatVolumeIconPath(40)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });

    test('level 3', () => {
        expect(formatVolumeIconPath(80)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });


});