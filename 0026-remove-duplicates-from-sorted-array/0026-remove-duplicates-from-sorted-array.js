function removeDuplicates(nums) {
    if(nums.length === 0) return;
let k = 0;
for(let i = 0 ; i < nums.length; i ++){
    if(nums[k] !== nums[i]){
         k++; nums[k] = nums[i]}
}
return k + 1;
}

