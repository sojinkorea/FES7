// https://youtu.be/RMmOU2u-_as?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

let num1 = 3;
let num2 = 5;
let answer = num1 === num2 ? 1 : -1;

// 정답
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120908
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
// includes, indexOf, search, replace(문자열이 줄어들었거나 늘어났으면 그 문자가 포함되어 있다는 것을 확인할 수 있다.)..

let str1 = 'ab6CDE443fgh22iJKlmn1o';
let str2 = '6CD';

str1.includes(str2) ? 1 : 2;

// 정답
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120819
// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
// 문제대로라면 문자열로 들어오는 것인데 실제로는 숫자가 들어옵니다. 아래 풀이 방식이 맞습니다.

let money = '15,000';

let 아메리카노 = parseInt(parseInt(money.replaceAll(',', '')) / 5500);
let 남은돈 = parseInt(money.replaceAll(',', '')) % 5500;

let answer = [아메리카노, 남은돈];

// 정답
function solution(money) {
  return [~~(money / 5500), money % 5500];
}
