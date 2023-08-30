var isValid = function(s) {
    let res = [], opened = { ")": "(", "}": "{", "]": "[" };
    let stnd = ["(", "{", "["];
    for (let i = 0; i < s.length; i++) {
        if (stnd.includes(s[i])) {
            res.push(s[i]);
        } else {
            if (res[res.length-1] == opened[s[i]]) {
                res.pop();
            } else {
                return false;
            }
        }
        console.log(res);
    }

    if (res.length == 0) {
        return true;
    } else {
        return false;
    }
    
};