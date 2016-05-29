module.exports = {

  helloWorld: function () {
    return "Hello World"
  },

  hello: function (str) {
    return "Hello " + str
  },

  shout: function (str) {
    return "Hello " + str.toUpperCase()
  },

  whisper: function (str) {
    return "Hello " + str.toLowerCase()
  },

  separate: function (str) {
    return str.split('')
  }

};
