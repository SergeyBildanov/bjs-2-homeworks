function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
    if(arr[i] > max){
      max = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(arr.length === 0){
    return 0;
  }
  let sum = 0;
  for(let i = 0; i<arr.length; i++){
    sum+=arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0){
    return 0;
  }
  let min = arr[0];
  let max = arr[0];
  for(let i=0; i<arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max-min;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0){
    return 0;
  }
  let sumEvenElements = 0;
  let sumOddElements = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElements += arr[i];
    }
    if(arr[i] % 2 === 1){
      sumOddElements += arr[i];
    }
  }
  return (sumEvenElements - sumOddElements);
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0){
    return 0;
  }
  let sumEvenElements = 0;
  let countEvenElements = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElements += arr[i];
      countEvenElements++;
    }
  }
  return (sumEvenElements/countEvenElements);
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i=0; i < arrOfArr.length; i++){
    let funcResult = func(...arrOfArr[i]);
    if(funcResult > maxWorkerResult){
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
}
