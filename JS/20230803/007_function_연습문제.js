// 문제1: 더하기, 빼기, 곱하기, 나머지를 하는 함수를 만들어주세요.
function add(x, y) {
  return x + y;
}

add(1, 2);

function diff(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}

// 문제2: '10,000,000,000'와 같은 문자를 입력받아 100000000000와 같은 숫자로 반환하는 함수를 만들어주세요

function stringToNumber(str) {
  let answer = parseInt(str.replaceAll(',', ''));
  return answer;
}

// 문제3: 입력된 문자열을 출력하고 입력된 문자열을 쪼개서 출력하는 함수를 만들어주세요.
// 입력: world
// 출력: ['w', 'o', 'r', 'l', 'd'];

function pringAndSplit(str) {
  console.log(str);
  return str.split('');
}

pringAndSplit('world');

// 4.

// 4-2번째 풀이
function add(num1, num2) {
  return num1 + num2;
}

function addAndMultiply(num1, num2) {
  let sum = add(num1, num2) * add(num1, num2);
  return sum;
}

// 4-3번째 풀이
function addAndMultiply(num1, num2) {
  // 메모리 효율을 위해 함수를 내부에서 만들어서 사용
  function add(num1, num2) {
    return num1 + num2;
  }
  let sum = add(num1, num2) * add(num1, num2);
  return sum;
}

// 문제5: x**2 + 4x -12를 구해주는 함수를 만들어주세요.
// 입력: 3
// 출력: 9

function calculate(x) {
  return x ** 2 + 4 * x - 12;
}
