function deepSum(arr){
  if (arr.length === 0) {
    return 0
  }
  var depan = arr[0];
  if(typeof depan !=='number'){
    depan = deepSum(arr[0]);
  }
  return depan + deepSum(arr.slice(1));
}

  //TEST CASE
  console.log(deepSum([1,2,3,4,[5,[5,5]]]))

  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2],
      [9, 4],
      [3,10]
    ],
    [
      [4, 14, 31],
      [9, [10, 18], 12, 20],
      [1, 4, 90]
    ],
    [10,
      [2, 5],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316

  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, [1,2,3,4]]
    ],
    [
      [4, 14, 31],
      3,
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    20,
    [
      [2, 5, 10],
      [[7,6],3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); 