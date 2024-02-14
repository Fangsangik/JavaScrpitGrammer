/**
 * Logical Operator (논리 연산자)
 * OR || 
 * AND && 
 * NOT ! 
 */

console.log(true || true) // T
console.log(true || false) //T
console.log(false || false) //F

console.log(true && true) //T
console.log(false && true) //F 
console.log(false && false)//F

const age = 20
const age1 = 17
const genderType = 'F';

const isGirl = genderType == 'F'
const isAdult = age > 19

if (isAdult === false){
    console.log("나는 성인이 아니다")
}

if (isAdult){
    if (genderType === 'F') {
    console.log("나는 성인이다");
    }
}


function getName (firstName, lastName) {
    //undefined를 두번 바꾸면 false 
    // const fName = firstName === undefined ? "성 없음" : firstName;
    // const lName = lastName === undefined ? "이름 없음" : lastName;

    const fName = firstName || "성 없음"
    const lName = lastName || "이름 없음 "

    return fName + ' ' + lName
}

console.log(getName ('hwang', 'sangik'));