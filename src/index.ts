/**
 * Represents a set of time units and their corresponding values.
 *
 * @property ms - Milliseconds.
 * @property s - Seconds.
 * @property m - Minutes.
 * @property h - Hours.
 * @property d - Days.
 * @property w - Weeks.
 * @property y - Years.
 */
export interface TimeData {
    ms: number;
    s: number;
    m: number;
    h: number;
    d: number;
    w: number;
    y: number;
}

/**
 * Rounds a number to a specified number of decimal places.
 * @param value - The number to round.
 * @param decimals - The number of decimal places to round to (default is 2).
 * @returns The rounded number.
 */
function round(value: number, decimals: number = 2): number {
    return Number(value.toFixed(decimals));
}

/**
 * Converts milliseconds to a TimeData object.
 * @param milliseconds - The number of milliseconds to convert.
 * @param decimals - The number of decimal places to round to (default is 2).
 * @returns TimeData object with the equivalent time in milliseconds (ms), seconds (s), minutes (m), hours (h), days (d), weeks (w), and years (y).
 * @example
 * ```ts
 * const timeData = ms(1500);
 * console.log(timeData);
 * // Output: { ms: 1500, s: 1.5, m: 0.03, h: 0, d: 0, w: 0, y: 0 }
 * ```
 */
export function ms(milliseconds: number, decimals: number = 2): TimeData {
    return {
        ms: round(milliseconds, decimals),
        s: round(milliseconds / 1000, decimals),
        m: round(milliseconds / (1000 * 60), decimals),
        h: round(milliseconds / (1000 * 60 * 60), decimals),
        d: round(milliseconds / (1000 * 60 * 60 * 24), decimals),
        w: round(milliseconds / (1000 * 60 * 60 * 24 * 7), decimals),
        y: round(milliseconds / (1000 * 60 * 60 * 24 * 365), decimals)
    };
}

/**
 * Converts seconds to a TimeData object.
 * @param seconds - The number of seconds to convert.
 * @param decimals - The number of decimal places to round to (default is 2).
 * @returns TimeData object with the equivalent time in milliseconds (ms), seconds (s), minutes (m), hours (h), days (d), weeks (w), and years (y).
 * @example
 * ```ts
 * const timeData = s(180);
 * console.log(timeData);
 * // Output: { ms: 180000, s: 180, m: 3, h: 0.05, d: 0, w: 0, y: 0 }
 * ```
 */
export function s(seconds: number, decimals: number = 2): TimeData {
    return {
        ms: round(seconds * 1000, decimals),
        s: round(seconds, decimals),
        m: round(seconds / 60, decimals),
        h: round(seconds / (60 * 60), decimals),
        d: round(seconds / (60 * 60 * 24), decimals),
        w: round(seconds / (60 * 60 * 24 * 7), decimals),
        y: round(seconds / (60 * 60 * 24 * 365), decimals)
    };
}

/**
 * Converts minutes to a TimeData object.
 * @param minutes - The number of minutes to convert.
 * @param decimals - The number of decimal places to round to (default is 2).
 * @returns TimeData object with the equivalent time in milliseconds (ms), seconds (s), minutes (m), hours (h), days (d), weeks (w), and years (y).
 * @example
 * ```ts
 * const timeData = m(3);
 * console.log(timeData);
 * // Output: { ms: 180000, s: 180, m: 3, h: 0.05, d: 0, w: 0, y: 0 }
 * ```
 */
export function m(minutes: number, decimals: number = 2): TimeData {
    return {
        ms: round(minutes * 60 * 1000, decimals),
        s: round(minutes * 60, decimals),
        m: round(minutes, decimals),
        h: round(minutes / 60, decimals),
        d: round(minutes / (60 * 24), decimals),
        w: round(minutes / (60 * 24 * 7), decimals),
        y: round(minutes / (60 * 24 * 365), decimals)
    };
}

/**
 * Converts hours to a TimeData object.
 * @param hours - The number of hours to convert.
 * @param decimals - The number of decimal places to round to (default is 2).
 * @returns TimeData object with the equivalent time in milliseconds (ms), seconds (s), minutes (m), hours (h), days (d), weeks (w), and years (y).
 * @example
 * ```ts
 * const timeData = h(2);
 * console.log(timeData);
 * // Output: { ms: 7200000, s: 7200, m: 120, h: 2, d: 0.08, w: 0.01, y: 0 }
 * ```
 */
export function h(hours: number, decimals: number = 2): TimeData {
    return {
        ms: round(hours * 60 * 60 * 1000, decimals),
        s: round(hours * 60 * 60, decimals),
        m: round(hours * 60, decimals),
        h: round(hours, decimals),
        d: round(hours / 24, decimals),
        w: round(hours / (24 * 7), decimals),
        y: round(hours / (24 * 365), decimals)
    };
}

/**
 * Converts days to a TimeData object.
 * @param days - The number of days to convert.
 * @param decimals - The number of decimal places to round to (default is 2).
 * @returns TimeData object with the equivalent time in milliseconds (ms), seconds (s), minutes (m), hours (h), days (d), weeks (w), and years (y).
 * @example
 * ```ts
 * const timeData = d(1);
 * console.log(timeData);
 * // Output: { ms: 86400000, s: 86400, m: 1440, h: 24, d: 1, w: 0.14, y: 0 }
 * ```
 */
export function d(days: number, decimals: number = 2): TimeData {
    return {
        ms: round(days * 24 * 60 * 60 * 1000, decimals),
        s: round(days * 24 * 60 * 60, decimals),
        m: round(days * 24 * 60, decimals),
        h: round(days * 24, decimals),
        d: round(days, decimals),
        w: round(days / 7, decimals),
        y: round(days / 365, decimals)
    };
}

/**
 * Converts weeks to a TimeData object.
 * @param weeks - The number of weeks to convert.
 * @param decimals - The number of decimal places to round to (default is 2).
 * @returns TimeData object with the equivalent time in milliseconds (ms), seconds (s), minutes (m), hours (h), days (d), weeks (w), and years (y).
 * @example
 * ```ts
 * const timeData = w(1);
 * console.log(timeData);
 * // Output: { ms: 604800000, s: 604800, m: 10080, h: 168, d: 7, w: 1, y: 0.02 }
 * ```
 */
export function w(weeks: number, decimals: number = 2): TimeData {
    return {
        ms: round(weeks * 7 * 24 * 60 * 60 * 1000, decimals),
        s: round(weeks * 7 * 24 * 60 * 60, decimals),
        m: round(weeks * 7 * 24 * 60, decimals),
        h: round(weeks * 7 * 24, decimals),
        d: round(weeks * 7, decimals),
        w: round(weeks, decimals),
        y: round(weeks / 52.1429, decimals) // 365 / 7 ≈ 52.1429 weeks per year
    };
}

/**
 * Converts years to a TimeData object.
 * @param years - The number of years to convert.
 * @param decimals - The number of decimal places to round to (default is 2).
 * @returns TimeData object with the equivalent time in milliseconds (ms), seconds (s), minutes (m), hours (h), days (d), weeks (w), and years (y).
 * @example
 * ```ts
 * const timeData = y(1);
 * console.log(timeData);
 * // Output: { ms: 31536000000, s: 31536000, m: 525600, h: 8760, d: 365, w: 52.14, y: 1 }
 * ```
 */
export function y(years: number, decimals: number = 2): TimeData {
    return {
        ms: round(years * 365 * 24 * 60 * 60 * 1000, decimals),
        s: round(years * 365 * 24 * 60 * 60, decimals),
        m: round(years * 365 * 24 * 60, decimals),
        h: round(years * 365 * 24, decimals),
        d: round(years * 365, decimals),
        w: round(years * 52.1429, decimals), // 365 / 7 ≈ 52.1429 weeks per year
        y: round(years, decimals)
    };
}