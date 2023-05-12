var addBinary = function(a, b) {
    // let res = parseInt(a, 2) + parseInt(b, 2);
    // return res.toString(2);
    let res = '';
    let len = ((a.length + b.length) % 2) == 0 ? 
    (a.length + b.length) / 2: ((a.length + b.length) / 2) + 1;

    console.log("len", Math.floor(len))
    let carry = 0;
    let aLen = a.length, bLen = b.length;

    if(aLen > bLen) {
        let i = aLen - bLen;
        while(i > 0) {
            b = "0"+ b;
            i--;
        }
    } else if(a.length < b.length) {
        let i = bLen - aLen;
        while(i > 0) {
            a = "0" + a;
            i--;
        }
    }

    console.log(a,b)

    for (let i = a.length -1; i >= 0; i--) {
        console.log(a[i],"+", b[i])
        let k =  parseInt(a[i]) + parseInt(b[i]) + carry;
         console.log("k", k)
        if (k == 2) {
            res = "0" + res
            carry = 1;
        } else if(k == 1) {
            res = "1" + res
            carry = 0;
        } else if(k == 3) {
            res = "1" + res
            carry = 1;
        }  else {
            res = "0" + res
            carry = 0;
        }

        if (carry == 1 && i == 0) res = "1" + res;

        console.log("res", res)
    }

    return res;
    
};