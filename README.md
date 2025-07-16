# time-converter-ts

![npm](https://img.shields.io/npm/v/time-converter-ts)
![License](https://img.shields.io/npm/l/time-converter-ts)
[![npm downloads](https://img.shields.io/npm/dt/time-converter-ts.svg)](https://www.npmjs.com/package/time-converter-ts)
![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue)
![GitHub issues](https://img.shields.io/github/issues/Mvory9/time-converter-ts)
![GitHub stars](https://img.shields.io/github/stars/Mvory9/time-converter-ts?style=social)

A lightweight, 100% TypeScript library for converting time units into a consistent `TimeData` object. Convert milliseconds, seconds, minutes, hours, days, weeks, or years into equivalent values across all time units with customizable decimal precision.

## Table of Contents
- Installation
- Usage
- API
- Use Cases
- Contributing
- License

## Installation

Install the library via npm:

```
npm install time-converter-ts
```

Ensure you have TypeScript installed if you're using it in a TypeScript project:

```
npm install typescript --save-dev
```

## Usage

Import the desired conversion functions and use them to convert time values into a `TimeData` object containing equivalent values in milliseconds (`ms`), seconds (`s`), minutes (`m`), hours (`h`), days (`d`), weeks (`w`), and years (`y`).

### Basic Example
```ts
import { ms, m } from 'time-converter-ts';

const milliseconds = ms(1500);
console.log(milliseconds);
// Output: { ms: 1500, s: 1.5, m: 0.03, h: 0, d: 0, w: 0, y: 0 }

const minutes = m(3);
console.log(minutes);
// Output: { ms: 180000, s: 180, m: 3, h: 0.05, d: 0, w: 0, y: 0 }
```

### Custom Decimal Precision
Control the number of decimal places with the optional `decimals` parameter:

```ts
import { h } from 'time-converter-ts';

const hours = h(2, 4);
console.log(hours);
// Output: { ms: 7200000, s: 7200, m: 120, h: 2, d: 0.0833, w: 0.0119, y: 0.0002 }
```

### Handling Negative Values
The library supports negative time values:

```ts
import { d } from 'time-converter-ts';

const days = d(-1);
console.log(days);
// Output: { ms: -86400000, s: -86400, m: -1440, h: -24, d: -1, w: -0.14, y: -0 }
```

## API

The library exports the following functions, each returning a `TimeData` object:

```ts
interface TimeData {
  ms: number; // Milliseconds
  s: number;  // Seconds
  m: number;  // Minutes
  h: number;  // Hours
  d: number;  // Days
  w: number;  // Weeks
  y: number;  // Years
}
```

### Functions
- `ms(milliseconds: number, decimals?: number): TimeData`
  Converts milliseconds to all time units.
  ```ts
  ms(1500, 2);
  // Output: { ms: 1500, s: 1.5, m: 0.03, h: 0, d: 0, w: 0, y: 0 }
  ```

- `s(seconds: number, decimals?: number): TimeData`
  Converts seconds to all time units.
  ```ts
  s(180, 2);
  // Output: { ms: 180000, s: 180, m: 3, h: 0.05, d: 0, w: 0, y: 0 }
  ```

- `m(minutes: number, decimals?: number): TimeData`
  Converts minutes to all time units.
  ```ts
  m(3, 2);
  // Output: { ms: 180000, s: 180, m: 3, h: 0.05, d: 0, w: 0, y: 0 }
  ```

- `h(hours: number, decimals?: number): TimeData`
  Converts hours to all time units.
  ```ts
  h(2, 2);
  // Output: { ms: 7200000, s: 7200, m: 120, h: 2, d: 0.08, w: 0.01, y: 0 }
  ```

- `d(days: number, decimals?: number): TimeData`
  Converts days to all time units.
  ```ts
  d(1, 2);
  // Output: { ms: 86400000, s: 86400, m: 1440, h: 24, d: 1, w: 0.14, y: 0 }
  ```

- `w(weeks: number, decimals?: number): TimeData`
  Converts weeks to all time units.
  ```ts
  w(1, 2);
  // Output: { ms: 604800000, s: 604800, m: 10080, h: 168, d: 7, w: 1, y: 0.02 }
  ```

- `y(years: number, decimals?: number): TimeData`
  Converts years to all time units.
  ```ts
  y(1, 2);
  // Output: { ms: 31536000000, s: 31536000, m: 525600, h: 8760, d: 365, w: 52.14, y: 1 }
  ```

All functions accept an optional `decimals` parameter (default: 2) to control rounding precision.

## Use Cases

Here are creative ways to use `time-converter-ts` in real-world applications:

1. Task Scheduling Applications:
   Convert user-inputted time intervals (e.g., "2 hours" or "3 days") into milliseconds for scheduling tasks or setting timeouts in Node.js or browser-based apps.
   ```ts
   import { h } from 'time-converter-ts';

   const timeout = h(2).ms; // 7200000 ms
   setTimeout(() => console.log('Task executed!'), timeout);
   ```

2. Time Tracking Tools:
   Convert logged work hours into days or weeks to generate reports for project management tools.
   ```ts
   import { h } from 'time-converter-ts';

   const workHours = h(40); // 40 hours (1 work week)
   console.log(`Worked ${workHours.d} days or ${workHours.w} weeks`);
   // Output: Worked 1.67 days or 0.24 weeks
   ```

3. Game Development:
   Use the library to manage game timers or cooldowns, converting between units for display or logic.
   ```ts
   import { s } from 'time-converter-ts';

   const cooldown = s(30).ms; // 30 seconds to milliseconds
   // Use in game loop or timer
   ```

4. Data Visualization:
   Convert large time intervals (e.g., years) into smaller units for charts or dashboards.
   ```ts
   import { y } from 'time-converter-ts';

   const projectDuration = y(2);
   console.log(`Project duration: ${projectDuration.d} days or ${projectDuration.w} weeks`);
   // Output: Project duration: 730 days or 104.29 weeks
   ```

5. Countdown Timers:
   Create user-friendly countdown displays by converting remaining time into multiple units.
   ```ts
   import { d } from 'time-converter-ts';

   const eventTime = d(10);
   console.log(`Event starts in ${eventTime.d} days (${eventTime.h} hours)`);
   // Output: Event starts in 10 days (240 hours)
   ```

6. Scientific Calculations:
   Convert time units for simulations or experiments requiring precise conversions.
   ```ts
   import { m } from 'time-converter-ts';

   const experimentDuration = m(90, 4);
   console.log(`Experiment runs for ${experimentDuration.s} seconds`);
   // Output: Experiment runs for 5400 seconds
   ```

7. API Development:
   Normalize time inputs from API requests into a consistent format for processing.
   ```ts
   import { s, m } from 'time-converter-ts';

   function normalizeTime(input: number, unit: string): TimeData {
     return unit === 'seconds' ? s(input) : m(input);
   }
   ```

8. Educational Tools:
   Build applications to teach time unit conversions for students.
   ```ts
   import { w } from 'time-converter-ts';

   const semester = w(12);
   console.log(`Semester duration: ${semester.d} days or ${semester.h} hours`);
   // Output: Semester duration: 84 days or 2016 hours
   ```

9. Fitness Trackers:
   Convert workout durations into various units for

 user-friendly displays.
   ```ts
   import { m } from 'time-converter-ts';

   const workout = m(45);
   console.log(`Workout: ${workout.m} minutes (${workout.s} seconds)`);
   // Output: Workout: 45 minutes (2700 seconds)
   ```

10. Event Planning:
    Calculate time spans for events or deadlines in multiple units.
    ```ts
    import { d } from 'time-converter-ts';

    const weddingPrep = d(30);
    console.log(`Time to wedding: ${weddingPrep.w} weeks or ${weddingPrep.h} hours`);
    // Output: Time to wedding: 4.29 weeks or 720 hours
    ```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository: https://github.com/Mvory9/time-converter-ts
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request.

### Running Tests
To ensure your changes don't break existing functionality:

```
npm install
npm test
```

### Building the Project
To compile the TypeScript code:

```
npm run build
```

Please follow the [Code of Conduct](https://github.com/Mvory9/time-converter-ts/blob/main/CODE_OF_CONDUCT.md) and report issues at https://github.com/Mvory9/time-converter-ts/issues.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Mvory9/time-converter-ts/blob/main/LICENSE) file for details.