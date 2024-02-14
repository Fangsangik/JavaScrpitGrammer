//동적 타이핑 
//자바 스크립트는 느슨한 타입 
//타입은 프로그램이 처리되는 과정에서 자동으로 파악됨 = runtime

//원시값과 reference Value로 나뉜다.
/**
 * 
 * JS Type
 * 원시 (primitive), 객체 (Reference)
 */ 

// 원시값 
// typeof를 사용시 값들이 string으로 변경
typeof undefined //'undefined
typeof true // 'boolean'
typeof 'String' // 'string'
typeof 123 // 'number'
typeof 9007199254740992n; // 'number' 
typeof Symbol() // 'symbol'
typeof null //Object 

//tyepof Number.MAX_SAFE_INTEGER; -> 초과 한 값을 BigInt 

//불변하다 
//원시값들은 불변하기 때문에 값의 초기는 값이 변하지 않는다. 
const test = 'string'
console.log(test.toUpperCase());  //STRING

console.log(test);

let bool = false;
console.log(!bool)
console.log(bool)
