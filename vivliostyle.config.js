module.exports = {
  language: 'ja',
  theme: 'theme_print.css',
  entry: ['example/techbook.md'],
  output: [
    {
      path: './book',
      format: 'webpub',
    },
  ],
};
