/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    if(n==0) nums1.sort((a, b)=> {return a-b});
    if(m==0) {
        nums2.sort((a, b)=> {return a-b});
        for(let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
    }

    if(m > 0 && n > 0) {
        for(let i = m, j = 0; i < m + n; i++, j++) {
            nums1[i] = nums2[j];
        }
        nums1.sort((a, b) => {return a-b});
    }

};

