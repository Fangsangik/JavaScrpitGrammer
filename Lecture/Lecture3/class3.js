let variable //선언
variable = 'string value' //할당
const initValue = '초기화된 변수' // 선언과 동시에 할당 -> 기본적인 변수의 역할로서 할당까지 끝남

//선언만 하면 undefined (정의 되지 않았다)
//variable undefined
const initValue1 = null // 빈 값이라고 아예 지정을 함 
//임의로 null을 넣는 경우도 있고 undefined를 넣는 경우도 있다. 

console.log(!undefined); //true
console.log(!!undefined); //false

console.log(!null); //true
console.log(!!null); //false

console.log(Number(undefined)); //명시적 형 변환 NaN
console.log(Number(null)); // 0
