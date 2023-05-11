var removeDuplicates = function(nums) {
    let res = [], len = nums.length, k = 0;
    if (nums.length <= 0) return 0;
    for(let i = 0; i < nums.length; i++) {
        if (i == 0) {
            res[res.length] = nums[i];
        } else if(i != 0 && !res.includes(nums[i])) {
            console.log(nums[i],i, res.length);
            nums[res.length] = nums[i];
            res[res.length] = nums[i];
        } else {
            nums[i] = "_" ;
        }
    }
    return res.length;
};