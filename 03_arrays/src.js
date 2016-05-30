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

}
