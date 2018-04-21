const path = require('path')

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        includePaths: [
          path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
      }
    }
  }
}
