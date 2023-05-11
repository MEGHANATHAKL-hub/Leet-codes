var romanToInt = function(s) {
    const romValues = {
      "I": 1, "V": 5, "X": 10, "L":50, "C":100, "D":500, "M":1000
    }
    let s1 = ["V", "X"],s2 = ["L", "C"], s3 = ["D", "M"];
    let res = 0;
    let prev;

    for(let i = s.length - 1; i >= 0; i--) {
      let curr = s[i];
      if (i == s.length - 1) {
        res += romValues[s[i]];
        prev = s[i];
      }
      
      if (i !== s.length - 1) {
          if (s1.includes(prev) && curr == "I") {
            res = res - 1;
            prev = s[i];
          } else if (s2.includes(prev) && curr == "X") {
            res = res - 10;
            prev = s[i];
          } else if (s3.includes(prev) && curr == "C") {
            res = res - 100;
            prev = s[i];
          } else {
            res += romValues[s[i]];
            prev = s[i];
          }
      }

    }
    return res;
};