function reverse_my_solution(str) {

  let temp = '';
  let backwards = str.split('');
  for (let i = 0; i < str.length / 2; i++) {
    temp = backwards[i];
    backwards[i] = backwards[str.length - i - 1];
    backwards[str.length - i - 1] = temp;
  }
  return backwards.join('');
}

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return "hmm that is not good";
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for(let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

let str = 'Hello';
console.log(reverse_my_solution(str));
console.log(reverse(str));
console.log(reverse2(str));
console.log(str);