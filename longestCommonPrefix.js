/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let res = '';
      if (strs.length <= 0 || strs[0].length <= 0 ) {
        return res;
      }
      let temp = strs[0];
      for(let i = 0; i < temp.length; i++) {
        let cond = false;
        for(let j = 0; j < strs.length; j++) {
         if (temp[i] == strs[j][i]) {
           cond = true;
         } else {
           cond = false;
         }
        }
        if (cond == true) {
          res += temp[i]
        } else {
          return res;
        }
      }
  
      return res;
  };


  var longestCommonPrefix = function(words) {
    // check border cases size 1 array and empty first word)
    if (!words[0] || words.length ==  1) return words[0] || "";
    let i = 0;
    // while all words have the same character at position i, increment i
    while(words[0][i] && words.every(w => w[i] === words[0][i]))
      i++;
    
    // prefix is the substring from the beginning to the last successfully checked i
    return words[0].substr(0, i);
};