/**
 * Falsy 
 * false인 값들만 나온다
 * else에서 주로 실행이 된다. 
 */

if (false) {

 } else {
    false
 }

 const emtpyString = "" //false
 emtpyString.length // falsy
 if (!emtpyString.length) {
    
 } else {
    console.log("문자열 비어있음")
 }