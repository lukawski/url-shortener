var exports = module.exports = {}

var baseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_,'
var base = baseAlphabet.length

exports.encodeUrl = function (num) {
  var encoded = ''
  while (num) {
    let rest = 0
    rest = num % base
    encoded = baseAlphabet[rest] + encoded
    num = Math.floor(num / base)
  }
  return encoded
}

exports.decodeUrl = function (str) {
  var decoded = 0
  while (str) {
    let index = baseAlphabet.indexOf(str[0])
    let power = str.length - 1
    decoded += index * (Math.pow(base, power))
    str = str.substring(1)
  }
  return decoded
}
