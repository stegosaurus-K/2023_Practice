const findKthLargest = (nums,k) => {
  let heapSize = nums.length;
  // 构建大顶堆
  buildMaxHeap(nums, heapSize);
  // 顶堆下沉至数组最后一位，并不再参与后续堆的调整
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--){
    swap(nums, 0, i);
    // 交换后调整堆
    heapSize -= 1; 
    maxHeapify(nums, 0, heapSize);
  }
  return nums[0];
}
function buildMaxHeap(nums, heapSize) {
  // 从第一个非叶子节点开始调整
  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--){
    maxHeapify(nums, i, heapSize);
  }
}
// 调整节点和其左右子节点的方法
function maxHeapify(nums, i, heapSize) {
  let l = i * 2 + 1;
  let r = i * 2 + 2;
  let largest = i;
  if (l < heapSize && nums[l] > nums[largest]) largest = l;
  if (r < heapSize && nums[r] > nums[largest]) largest = r;
  if (largest !== i) {  // 如果largest !== i，说明节点<其左右子节点，需要交换调整
    swap(nums, i, largest);
    // 继续对子节点进行同样的操作
    maxHeapify(nums, largest, heapSize);
  }
}
function swap(nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}