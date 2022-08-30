if (process.env.CYPRESS_INTERNAL_ENV !== 'production') {
  require('../ts/registerDir')(__dirname)
}

module.exports = require('./src')
