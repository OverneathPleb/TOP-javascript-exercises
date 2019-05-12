const ftoc = function(fahren) {
  return (Math.round(((fahren-32)*(5/9))*10)/10)
}

const ctof = function(celcius) {
  return (Math.round((celcius*1.8+32)*10)/10)
}

module.exports = {
  ftoc,
  ctof
}
