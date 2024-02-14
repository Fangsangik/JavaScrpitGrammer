//if문, for문 등등 
//문 = statement -> 명령, 흐름을 제어 가능 
//제어문, 식, 공문 등등이 있음 
// {} -> if for switch ~ case, while, do ~ while, break, continue => program을 구동 


//if (식 or 값)
if (10 > 1){
    return '10은 1보다 크다'
} else if (10 === 10) {
    return ''
} else {
    return ''
}

//for문 
//let i = 0; -> 초기화 (기본 setting) // i < array.length; 조건 (평가되는 부분) 참 => 실행 / 거짓 => 종료 
//i++ 참일때 추가적으로 실행되는 식 

const array = [1,2,3]

for (let i = 0; i < array.length; i++) {
   //console.log(i);
   console.log(array[i]);
}

if (array.length === 3){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1){
            console.log(array[i]);
        }
    }
}