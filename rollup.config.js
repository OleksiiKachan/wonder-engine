import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify';
import typescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';

import { dirname } from 'path';
import pkg from './package.json';
const input = {
  index: 'src/index.ts',
  WonderEngineContext: 'src/context/index.ts',
  AspectRatioBox: 'src/components/aspect-ratio-box/index.tsx',
  BaseButton: 'src/components/base-button/index.tsx',
  LinkContainer: 'src/components/link-container/index.ts',
  Portal: 'src/components/portal/index.tsx',
  Toggle: 'src/components/toggle/index.tsx',
};
const external = (id) => !id.startsWith('.') && !id.startsWith('/');

const opts = {
  input,
  external,
  plugins: [
    nodeResolve(),
    typescript({
      tsconfigOverride: { noEmit: true },
    }),
    babel({
      runtimeHelpers: true,
      extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
    }),
  ],
};

export default [
  {
    ...opts,
    output: {
      dir: dirname(pkg.main),
      format: 'cjs',
      sourcemap: true,
    },
  },

  // umd
  {
    ...opts,
    input: 'src/index.ts',
    plugins: [...opts.plugins, minify({ comments: false })],
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'Img',
      sourcemap: true,
      sourcemapPathTransform: (relativePath) =>
        relativePath.replace(/^.*?\/node_modules/, '../../node_modules'),
    },
  },

  // esm
  {
    ...opts,
    output: {
      dir: dirname(pkg.module),
      format: 'esm',
      sourcemap: true,
    },
  },
];
