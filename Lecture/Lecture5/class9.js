/**
 * Not a Number
 * 숫자로 읽어낼 수 없다 
 * 절못된 계산 결과식
 * 정의 할 수 없는 결과식 
 * 문자열이 포함된 결과식 (덧샘 제외)
 */

//true (느슨하게 검사)
isNaN(undefined)
isNaN({})
isNaN('문자열')

//false (엄격하게 검사)
Number.isNaN(undefined)
Number.isNaN({})
Number.isNaN('문자열')