function mergeSortedArraysMySolution(arr1, arr2) {

    if(arr1.length === 0 && arr2.length !== 0) {
      return arr2;
    } else if (arr2.length === 0 && arr1.length !== 0) {
      return arr1;
    } else if (arr1.length === 0 && arr2.length === 0) {
      return [];
    }

    let res = [];

    for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
      if (arr1[i] < arr2[j]) {
        while(arr1[i] < arr2[j]) {
          res.push(arr1[i]);
          i++;
        }
      } else if (arr2[j] < arr1[i]) {
        while (arr2[j] < arr1[i]) {
          res.push(arr2[j]);
          j++;
        }
      } else if(arr1[i] === arr2[j]) {
        while (arr1[i] === arr2[j]) {
          res.push(arr1[i]);
          res.push(arr2[j]);
          i++;
          j++;
        }
      } else {
        i++;
        j++;
      }
    }
    return res;
}

function mergeSortedArray(array1, array2) {
  const mergedArray = [];

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }


  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}


let firstSortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let secondSortedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

console.log(mergeSortedArraysMySolution(firstSortedArray, secondSortedArray));

console.log(mergeSortedArraysMySolution( secondSortedArray, firstSortedArray));

