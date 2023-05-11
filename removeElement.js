var removeElement = function(nums, val) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[res.length] = nums[i];
            res[res.length] = nums[i];
        } else {
            nums[i] = "_";
        }
    }

    return res.length;
};