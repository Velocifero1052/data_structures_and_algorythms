export function containsCommonItem2(arr1, arr2) {

  if (arr1 == null || arr2 == null || Array.isArray(arr1) || Array.isArray(arr2)) {
    return false;
  }

  //loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[i]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  //console.log(map);
  //loop through second array and check if item in second array exists on created object.
  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) {
      return true;
    }
  }
  return false;
}

//O(a + b)

export function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}