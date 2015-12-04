module.exports = {

  helloWorld: function() {
    return "Hello World";
  },

  hello: function(string) {
    return "Hello " + string;
  },

  shout: function(str) {
    return "Hello " + str.toUpperCase();
  },

  whisper: function(str) {
    return "Hello " + str.toLowerCase();
  },

  separate: function(str) {
    results = str.split('');
    return results;
  },

  reverseJoin: function(givenArray) {
    for (var i = 0; i < givenArray.length; i++) {
      results = givenArray.slice("").reverse().join();
    }
    return results;
  },

  reverseJoinCompact: function(givenArray) {
    for (var i = 0; i < givenArray.length; i++) {
      results = givenArray.slice().reverse().join('');
    }
    return results;
  },


  }
