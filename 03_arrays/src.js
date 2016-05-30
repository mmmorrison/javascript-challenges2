module.exports = {

 first: function(array) {
  return array[0]
 },

 last: function(array) {
  return array.pop()
 },

 empty: function(array) {
  return (array.length == 0) ? true : false
 },

 first_n: function(array, n) {
  if (array.length === 0) {
   return array;
  } else {
   if (n < array.length) {
    return array.slice(0, n);
   } else {
    return array;
   }
  }
 },

 last_n: function(array, n){
     if (array.length == 0){
       return array;
     }
     else if(n < array.length){
      return array.slice(n-1, array.length);
     }
     else {
       return array;
     }
   },

  drop: function (array, n) {
    if (n < array.length) {
      return array.splice(n, array.length)
    } else {
    if (n > array.length) {
      return []
      }
    }
  },

  union: function (array1, array2) {
    if (array1.length == 0 && array2.length == 0){
      return []
    } else {
      return array1.concat(array2)
    }
  },

  intersection: function (array1, array2) {
    var same = array1.filter(function(index) {
      return array2.indexOf(index) > -1
    })
      return same
  }
}
