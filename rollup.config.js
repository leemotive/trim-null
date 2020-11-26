export default {
  input: './index.js',
  output: [
    {
      file: './es/index.js',
      format: 'es',
    },
    {
      file: './lib/index.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: './dist/trimNull.js',
      format: 'umd',
      exports: 'named',
      name: 'trimNull',
    },
  ],
};
