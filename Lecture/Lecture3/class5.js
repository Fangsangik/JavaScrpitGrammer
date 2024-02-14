/**
 * 암시적 & 명시작 
 */

// !! => Boolean
// Number(값) String(값) Boolean(값) Array.from() -> 명시적 형 변환을 의미 

//암시적 형 변환 -> 명시적으로 형 변환 해줘여 한다
const rst1 = String(1) + '입니다'
console.log(typeof rst1) //숫자 + 문자열 -> 숫자가 문자열로 변경된다 

const rst2 = '11' + String(11) 
console.log(typeof rst2); //String으로 변경 

const rst3 = Number('2') * 2
console.log(typeof rst3); //Number로 형 변환 됨 

const rst4 = Number(String(['1111'])) + 111 //string
console.log(typeof rst4); //배열과 문자열이 더해진다.  
