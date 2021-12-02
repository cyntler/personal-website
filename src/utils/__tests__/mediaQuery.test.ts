import { BreakpointName, breakpoints, onScreen } from '../mediaQuery';

test('breakpoints have number value', () => {
  Object.keys(breakpoints).forEach((breakpoint) => {
    expect(typeof breakpoints[breakpoint as BreakpointName]).toBe('number');
  });
});

test('return valid media query for tablet', () => {
  const result = onScreen('tablet');

  expect(result).toBe(`@media (min-width: ${breakpoints.tablet}px)`);
});

test('return valid media query for desktop', () => {
  const result = onScreen('desktop');

  expect(result).toBe(`@media (min-width: ${breakpoints.desktop}px)`);
});
