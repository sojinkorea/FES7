// BigInt ***
// JS에서 큰 숫자를 사용할 때에는 BigInt를 사용합니다.
// BigInt를 여러분 회사에서 사용하지 않을 수도 있습니다.(추가된지 3년 되었습니다.)
// The proposal belongs to ECMAScript 2020, which is the 11th edition
// console.log(Number.MAX_SAFE_INTEGER)  // 2^53 - 1

// 서비스는 항상 최악의 상황, 악성 유저에 대비를 하셔야 합니다.
// 아래처럼 정상 작동이 되지 않는 경우들이 있습니다.
// 2**53 - 1
// 9007199254740991

9007199254740991 + 1;
// 9007199254740992

9007199254740991 + 2;
// 9007199254740992

9007199254740991 + 3;
// 9007199254740994

9007199254740991 + 4;
// 9007199254740996

// 제대로 나오게 하려면 n을 붙이세요!
9007199254740991n + 1n;
// 9007199254740992n

9007199254740991n + 2n;
// 9007199254740993n

9007199254740991n + 3n;
// 9007199254740994n

9007199254740991n + 4n;
// 9007199254740995n

BigInt(9007199254740991) + BigInt(1);
// 9007199254740992n

BigInt(9007199254740991) + BigInt(2);
// 9007199254740993n

BigInt(9007199254740991) + BigInt(3);
// 9007199254740994n

BigInt(9007199254740991) + BigInt(4);
// 9007199254740995n

// 참고삼아 기억해주세요.
// BigInt(5) + 5n
// BigInt(5) + 5 // error
// BigInt(5) / 2n // 2n (소수 표현 안됨)
// BigInt("10") + BigInt("10") // 큰 값을 정수로 입력받을 때에는 string으로 처리해서 받아야 함

// 공식문서 설명
/*
    9007199254740991 이 숫자는 Number.MAX_SAFE_INTEGER와 동일 수 입니다. 말 그대로 안전한 숫자입니다. 만약 BigInt 안의 숫자를 이 숫자보다 큰 숫자로 하였을 경우, 정확한 연산이 안됩니다. MDN 문서를 보시죠.

    const x = Number.MAX_SAFE_INTEGER + 1;
    const y = Number.MAX_SAFE_INTEGER + 2;

    console.log(x === y);

    분명히 다른 숫자를 더했는데 true가 나옵니다.

    이 '안전하지 않은 숫자'를 BigInt 안에 넣어보겠습니다.

    BigInt(9007199254740993) // 9007199254740992n
    BigInt(9007199254740995) // 9007199254740996n

    보시는 것처럼 제대로 표현하지 못하고 있어요.

    하지만 BigInt 안에 이 숫자를 문자로 넣어주면
    BigInt("9007199254740993") // 9007199254740993n
    BigInt("9007199254740995") // 9007199254740995n

    위와 같이 제대로 표현합니다.

    그래서 BigInt로 큰 숫자를 표현하더라도, 그 안에 들어가는 값은 Number.MAX_SAFE_INTEGER 이하일 때만 안전하고 그 이상의 숫자를 넣으면 정확하게 결과값을 내어주지 않습니다. 따라서 BigInt()를 사용하여 더 큰 숫자를 표현하고 싶을 때에는 문자로 넣어주세요.
*/
