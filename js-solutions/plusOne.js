var plusOne = function(digits) {
    // if (digits[digits.length-1] < 9) {
    //     digits[digits.length-1] += 1;
    //     return digits; 
    // } 
    // let str = parseInt(digits.join(",").replaceAll(",", "")) + 1;
    // console.log(parseInt(digits.join(",").replaceAll(",", "")), str)
    // return str.toString().split("");

    for(let i=digits.length-1;i>=0;i--){
        digits[i]++;
        if(digits[i]>9){
            digits[i]=0;
        }
        else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};