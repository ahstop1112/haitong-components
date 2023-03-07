import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescriptEngine from 'typescript';

const config = {
  input: './src/index.ts',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
    },
    {
      file: 'lib/index.es.js',
      format: 'es',
      exports: 'named',
      sourcemap: false,
    },
  ],
  plugins: [
    // external({
    //   includeDependencies: true,
    // }),
    typescript({
      tsconfig: './tsconfig.json',
      typescript: typescriptEngine,
      sourceMap: false,
    }),
    commonjs(),
    // babel({
    //   extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
    //   babelHelpers: 'runtime',
    //   exclude: /node_modules/,
    // }),
    // url(),
    // svgr(),
    resolve(),
    terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

export default config;
