function checkPolindrome (num) {
    let cop = num, r = 0, a = 0;
    while(cop > 0) {
        r = cop % 10;
        cop = (cop / 10).toFixed(0);
        a = (10 * a) + r;
        console.log(cop,a)
    }
    console.log(num, a)
    if (num == a) return true;
    else return false;
}

console.log(checkPolindrome(12))

var isPalindrome = function(x) {
    let data = x.toString();
    let len = data.length;
    let temp = data.split("").reverse().join("");
    if (data == temp) return true
    else return false
};