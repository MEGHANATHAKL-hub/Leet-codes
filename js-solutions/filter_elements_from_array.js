/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
 var filter = function(arr, fn) {
    let result = [];
     arr.forEach((val, index)=> {
         if(fn(val, index)) {
             result.push(val)
         }
    })
    return result; 
};