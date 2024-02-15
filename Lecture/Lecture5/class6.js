/**
 * 정수 (Integer)
 * 자바 스크립트는 부동소수점 숫자만 존재
 * 정수를 저장하는 2가지 방법
 * 
 * 1. 10진 소수가 없는 작은 숫자는 정수로 오래 유지 (31비트)
 * 2. 비트 연산자를 이용 32비트 정수로 바꿔 반환 
 */

//숫자를 안전하게 다룰수 있다. 
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

// 소수점을 다루는 방법
Math.floor(4.6) //버림
Math.ceil(4.6) // 올림
Math.round(4.6) //반올림
 