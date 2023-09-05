Array.prototype.last = function() {
    if(this.length == 0) return -1;
    return this[this.length-1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

//another way
if (!Array.prototype.last) {
Object.defineProperty(Array.prototype, 'last', {
value: function () {
if (this.length === 0) {
return -1;
}
return this[this.length - 1];
},
enumerable: false,
configurable: true,
writable: true
});
}