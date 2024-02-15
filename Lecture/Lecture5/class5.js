/**
 * BigInt
 * 원시 값이 안정적으로 나타낼수 있는 최대치 
 * internet Exploer에서 지원을 하지 않는다
 * bitInt는 엄격 검사를 실행 했을때 false가 나오지만, 느슨한 검사를 사용시 true
 * 
 * 안정적인 범위의 정수 
 */

//자바 스크립트가 표현할 수 있는 가장 큰 숫자
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER); //안전한 정수의 최대치 

//다루기 어려운 큰 숫자들을 사용 할 수 있다. 
console.log(12312312131213131312313131311313131321313n); 
console.log(BigInt(12312312131213131312313131311313131321313));


