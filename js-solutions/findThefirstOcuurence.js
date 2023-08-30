var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
//    let id = 0, index = -1, k = 0;
//     for (let i = 0; i < haystack.length; i++) {
//         if (i >= needle.length) k = 0;
//         if (haystack[i] == needle[k]){
//             console.log("true", haystack[i], id);
//             id = id + 1;
//             k++;
//         } else {
//             console.log("false", haystack[i]);
//             id = 0;
//             index = -1;
//             k = 0;
//         }
//         if (id == 1) index = i;

//         if (id == needle.length) {
//             return index;
//         }

       
//     }

//     if (id == needle.length) {
//         return index;
//     } else {
//         return -1;
//     }
};


var strStr = function(haystack, needle) {
   let id = 0, index = -1, k = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (i >= needle.length) k = 0;
        if (haystack[i] == needle[k]){
            console.log("true", haystack[i], id);
            id = id + 1;
            k++;
        } else {
            console.log("false", haystack[i]);
            id = 0;
            index = -1;
            k = 0;
        }
        if (id == 1) index = i;

        if (id == needle.length) {
            return index;
        }

       
    }

    if (id == needle.length) {
        return index;
    } else {
        return -1;
    }
};