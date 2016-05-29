module.exports = {

  sameLength: function (str1, str2) {
    return (str1.length == str2.length) ? true : false
  },

  firstGreater: function (arg1, arg2) {
    return (arg1 > arg2) ? true : false
  },

  firstGreaterOrEqualTo: function (arg1, arg2) {
    return (arg1 >= arg2) ? true : false
  },

  firstLengthGreater: function (arg1, arg2) {
    return (arg1.length > arg2.length) ? true : false
  },

  secondGreater: function (arg1, arg2) {
    return (arg1 < arg2) ? true: false
  }
};
