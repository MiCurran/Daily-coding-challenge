
var lengthOfLIS = function(nums) {
    
  if(nums.length <= 1)
      return nums.length;
  let buckets = [nums[0]];

   const binarySearch = val =>{
      let low = 0, high = buckets.length - 1;
      while(low < high){
          
          const mid = low + Math.floor((high - low)/2);
          if(buckets[mid]< val)
              low = mid + 1;
          else
              high = mid;
      }
      return low;
  }
   
  for(let i=1;i < nums.length;i++){
      if(buckets[buckets.length -1] < nums[i]){
          buckets.push(nums[i]);
      }else{
          const index = binarySearch(nums[i]);
          
          buckets[index] = nums[i];
      }
  }
  console.log(buckets.length)
  return buckets.length;
};

//test code
nums = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
lengthOfLIS(nums)