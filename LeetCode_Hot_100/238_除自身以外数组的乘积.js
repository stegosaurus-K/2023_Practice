const productExceptSelf = nums => {
  const output = [];
  output[0] = 1;
  for (let i = 1; i < nums.length; i++){
    output[i] = output[i - 1] * nums[i - 1];
  }
  let right_output = 1;
  for (let i = nums.length - 1; i >= 0; i--){
    output[i] *= right_output;
    right_output *= nums[i];
  }
  return output;
}