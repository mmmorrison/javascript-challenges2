module.exports = {

  helloWorld: function () {
    return "Hello World"
  },

  hello: function (str) {
    return "Hello " + str
  },

  shout: function (str) {
    return 'Hello ' + str.toUpperCase()
  },

  whisper: function (str) {
    return 'Hello ' + str.toLowerCase()
  },

  separate: function (str) {
    return str.split("")
  },

  reverseJoin: function (array) {
    return array.reverse().join()
  },

  reverseJoinCompact: function (array) {
    return array.reverse().join('')
  },

  backwardsDay: function (str) {
    return "Hello " + str.split('').reverse().join('')
  }
};
