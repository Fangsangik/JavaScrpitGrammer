//=== 서로 같은지 엄격하게 검사 
//!== 서로 다른지 느슨하게 검사 

//==서로 같은지 느슨하게 검사 
//!= 서로 다른지 느슨하게 검사 
//느슨하게 검사하는 것은 형 변환 가능성 있다. 

let cnt = 0;
cnt++; // 단항 연산자 중 증가 연산자 
console.log(cnt);

cnt = 2;
cnt--; // 감소 연산자 
console.log(cnt);

//논리 연산자 
var a1 = true && true;
var a2 = true && false;
var a3 = false && true;
var a4 = false && 3 ==4;
var a5 = 'Cat' && 'Dog';
var a6 = false && 'Cat';
var a7 = 'Cat' && false;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);

console.log("=================");

var b1 = true || true;
var b2 = true || false;
var b3 = false || true;
var b4 = false || 3 ==4;
var b5 = 'Cat' || 'Dog';
var b6 = false || 'Cat';
var b7 = 'Cat' || false;

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);
console.log(b6);

console.log("=================");

var c1 = !true;
var c2 = !false;
var c3 = !!'Cat';

console.log(c1);
console.log(c2);
console.log(c3);

console.log("=================");

//const 삼항연산자 ? '참일때' : '거짓일떄';
const 삼한연산자 = 1 === '1' ? '참' : '거짓';

let temp;
if (1 === '1'){
    temp = '참';
} else{
    temp = '거짓';
}

console.log("=================");
