/**
 * @param {number} n
 * @return {Function} counter
 */
 var createCounter = function(n) {
    return function() {
        return n++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

function a(b) {
    console.log("hi"+b)
}

function a(b) {
    console.log("bye"+b)
}

a(2);