var exports = module.exports = {}

var baseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_,'

exports.encodeUrl = function (num) {
  var encoded = ''
  var base = baseAlphabet.length
  while (num) {
    let rest = 0
    rest = num % base
    encoded += baseAlphabet[rest]
    num = Math.floor(num / base)
  }

  return encoded
}

exports.decodeUrl = function (str) {

}
