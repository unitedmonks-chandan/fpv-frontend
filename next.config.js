module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLE_CIENT_ID:
      '552795491788-g9bm3sjendqmmsocfqjb89udl2o72np5.apps.googleusercontent.com',
    GOOGLE_CIENT_SECRET: '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',
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}
