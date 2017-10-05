
module.exports = {
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.test.js$/,
        loader: 'ignore-loader'
      }
    )
    return config
  }
}
