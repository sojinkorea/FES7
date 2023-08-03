// 별표 ****

// 1. 비교연산 했을 때
let x = 3;
let y = 5;
console.log(x > y);

// 2. 논리연산 했을 때 각 비교값이 true나 false인 경우
// (true나 false가 아닌 경우 단락회로평가각 일어남)
let x = true;
let y = false;
console.log(x && y); // false

// 3. true나 false로 평가된느 것들
if (value) {
  // value가 true일 때 실행
  // 어떤 value가 true일까?
}

if (Boolean('hello')) {
  console.log('true');
}
if ('hello') {
  console.log('true');
}

Boolean('hello'); // true
Boolean(' '); // true
Boolean(''); // false
Boolean(0); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
// !!null // !!'hello' // 실무에서 true, false를 구분할 때 사용

// 4. javascript에서 나를 힘들게 하는 true, false
x = [1, 2, 3];
x.pop();
x.pop();
x.pop();

Boolean([1, 2, 3]); // true
Boolean([]); // true
Boolean({ one: 1 }); // true
Boolean({}); // true

null == undefined; // true
null > undefined; // false, 다른 비교도 false
null == 0; // false
undefined < 100; // 숫자와 비교는 다 flase
