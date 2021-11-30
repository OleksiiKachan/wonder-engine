import { defineSirocConfig } from 'siroc';

export default defineSirocConfig({
  rollup: { esbuildOptions: { target: 'esnext' } },
});
