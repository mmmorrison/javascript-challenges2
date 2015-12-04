module.exports = {
  sameLength: function(s1, s2) {
    var results = (s1.length == s2.length) ? true:false;
    return results;
  },

  firstGreater: function(a1, a2) {
    var results = (a1 > a2) ? true:false;
    return results;
  },

  firstGreaterOrEqualTo: function(a1, a2) {
    var results = (a1 >= a2) ? true:false;
    return results;
  },

  firstLengthGreater: function (a1, a2) {
    var results = (a1.length > a2.length) ? true:false;
    return results;
  },

  secondGreater: function (a1, a2) {
    var results = (a2 > a1) ? true:false;
    return results;
  },

}
