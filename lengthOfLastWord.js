var lengthOfLastWord = function(s) {
    let array = s.trimEnd().split(" ");
    console.log(array)
    return array[array.length - 1].length;
};