import { ms, s, m, h, d, w, y, TimeData } from '../src/index';

describe('Time Converter Library', () => {
    // Тестирование функции ms
    describe('ms function', () => {
        test('should convert 1500 milliseconds correctly', () => {
            const result: TimeData = ms(1500);
            expect(result).toEqual({
                ms: 1500,
                s: 1.5,
                m: 0.03,
                h: 0,
                d: 0,
                w: 0,
                y: 0
            });
        });

        test('should handle negative milliseconds', () => {
            const result: TimeData = ms(-1500);
            expect(result).toEqual({
                ms: -1500,
                s: -1.5,
                m: -0.03,
                h: -0,
                d: -0,
                w: -0,
                y: -0
            });
        });

        test('should handle custom decimals', () => {
            const result: TimeData = ms(1500, 4);
            expect(result).toEqual({
                ms: 1500,
                s: 1.5,
                m: 0.025,
                h: 0.0004,
                d: 0,
                w: 0,
                y: 0
            });
        });

        test('should handle zero milliseconds', () => {
            const result: TimeData = ms(0);
            expect(result).toEqual({
                ms: 0,
                s: 0,
                m: 0,
                h: 0,
                d: 0,
                w: 0,
                y: 0
            });
        });
    });

    // Тестирование функции s
    describe('s function', () => {
        test('should convert 180 seconds correctly', () => {
            const result: TimeData = s(180);
            expect(result).toEqual({
                ms: 180000,
                s: 180,
                m: 3,
                h: 0.05,
                d: 0,
                w: 0,
                y: 0
            });
        });

        test('should handle custom decimals', () => {
            const result: TimeData = s(180, 3);
            expect(result).toEqual({
                ms: 180000,
                s: 180,
                m: 3,
                h: 0.05,
                d: 0.002,
                w: 0,
                y: 0
            });
        });
    });

    // Тестирование функции m
    describe('m function', () => {
        test('should convert 3 minutes correctly', () => {
            const result: TimeData = m(3);
            expect(result).toEqual({
                ms: 180000,
                s: 180,
                m: 3,
                h: 0.05,
                d: 0,
                w: 0,
                y: 0
            });
        });

        test('should handle negative minutes', () => {
            const result: TimeData = m(-3);
            expect(result).toEqual({
                ms: -180000,
                s: -180,
                m: -3,
                h: -0.05,
                d: -0,
                w: -0,
                y: -0
            });
        });
    });

    // Тестирование функции h
    describe('h function', () => {
        test('should convert 2 hours correctly', () => {
            const result: TimeData = h(2);
            expect(result).toEqual({
                ms: 7200000,
                s: 7200,
                m: 120,
                h: 2,
                d: 0.08,
                w: 0.01,
                y: 0
            });
        });

        test('should handle custom decimals', () => {
            const result: TimeData = h(2, 4);
            expect(result).toEqual({
                ms: 7200000,
                s: 7200,
                m: 120,
                h: 2,
                d: 0.0833,
                w: 0.0119,
                y: 0.0002
            });
        });
    });

    // Тестирование функции d
    describe('d function', () => {
        test('should convert 1 day correctly', () => {
            const result: TimeData = d(1);
            expect(result).toEqual({
                ms: 86400000,
                s: 86400,
                m: 1440,
                h: 24,
                d: 1,
                w: 0.14,
                y: 0
            });
        });

        test('should handle negative days', () => {
            const result: TimeData = d(-1);
            expect(result).toEqual({
                ms: -86400000,
                s: -86400,
                m: -1440,
                h: -24,
                d: -1,
                w: -0.14,
                y: -0
            });
        });
    });

    // Тестирование функции w
    describe('w function', () => {
        test('should convert 1 week correctly', () => {
            const result: TimeData = w(1);
            expect(result).toEqual({
                ms: 604800000,
                s: 604800,
                m: 10080,
                h: 168,
                d: 7,
                w: 1,
                y: 0.02
            });
        });

        test('should handle custom decimals', () => {
            const result: TimeData = w(1, 4);
            expect(result).toEqual({
                ms: 604800000,
                s: 604800,
                m: 10080,
                h: 168,
                d: 7,
                w: 1,
                y: 0.0192
            });
        });
    });

    // Тестирование функции y
    describe('y function', () => {
        test('should convert 1 year correctly', () => {
            const result: TimeData = y(1);
            expect(result).toEqual({
                ms: 31536000000,
                s: 31536000,
                m: 525600,
                h: 8760,
                d: 365,
                w: 52.14,
                y: 1
            });
        });

        test('should handle negative years', () => {
            const result: TimeData = y(-1);
            expect(result).toEqual({
                ms: -31536000000,
                s: -31536000,
                m: -525600,
                h: -8760,
                d: -365,
                w: -52.14,
                y: -1
            });
        });
    });
});