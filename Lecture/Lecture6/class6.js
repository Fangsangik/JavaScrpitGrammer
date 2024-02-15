/**
 * Template Literals 
 * 1. 멀티라인 (개행)이 자유로움
 * 2. Basic String Formatting -> 보관법을 활용 -> 표현식을 문자열 포함 
 * 3. HTML Escaping : 안전하게 사용하도록 도움 (XXS, SQL Injection)
 */ 

//보안 취약 
const htmlTemplate = '<div>' + '??????' + '<div>'
body.innerHtml = htmlTemplate;

const multiLine = 'first Line \n last line'; 
function genHello(name) {
    //backtick으로 감싸서 사용 
    return `안녕하세요'  + ${name} + '님 반갑습니다.`
}

console.log(genHello('hello'));

function genDivison(innerText){
    return `<div> ${name} </div>`
}

const divTag = genDivison("Hwang");
body.innerHtml = divTag;
