/**
 * Infinity
 * 너무 크거나 작다 
 * 지수 1023까지만 허용 
 * 오류로 인정 되는 것은 아니다 
 */

const rst = isFinite(Math.pow(2, 1024))
console.log(rst);
7/0
//Infinity 

//isFinite -> Infinity가 맞는지 아닌지 
isFinite(Infinity) //false
isFinite(NaN) //false
isFinite(19); //true
