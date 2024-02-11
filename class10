/**
 * scope 
 * 변수 유효 범위  
 * 내부에서 외부로는 접근 가능
 * 외부에서 내부로는 접근 불가능 
 * 
 * 변수 선언 하는 방법 
 * var, let, const
 * 
 * var 는 첨부터 있었다.
 * ES2015+ => let, const 등장 => 블록 단위 (안전하게 처리 가능)
 */


var globalVal = '어디서든 접근 가능'
var varVal = '함수단위';
const constVal = '블럭 단위';

//함수 안에서 사용된 변수는 밖에서 사용 불가 
console.log(num); 

for (let i = 0; i < [0,1,2].length; i++) {}



function outerFunc(){
    console.log(globalVal);
    console.log(innerVal); //innerVal is not defined 안에서 위로 찾아가기 때문에 찾을 수 없음 

    function innerFunc(){ 
        var innerVal = '함수 내부 지역 변수'
        console.log(globalVal); // 없으면 위로 찾아간다. 
    }

    innerFunc()
    return num;
}
