/**
 * 문자열 산술 연산
 */

function genHello (name) {
    const rstName = (name ? name : "이름 없음")
    return rstName + '님 안녕하세요'
}

console.log(genHello('Hwang'))