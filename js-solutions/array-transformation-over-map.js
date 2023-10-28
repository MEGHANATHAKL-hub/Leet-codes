var map = function(arr, fn) {
    let array = [];
    arr.forEach((item, index)=> {
        array.push(fn(item, index))
    })
    return array;
};