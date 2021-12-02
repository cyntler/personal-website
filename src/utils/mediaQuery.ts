export const breakpoints = {
  tablet: 600,
  desktop: 1000,
};

export type BreakpointName = keyof typeof breakpoints;

export const onScreen = (name: BreakpointName) =>
  `@media (min-width: ${breakpoints[name]}px)`;
