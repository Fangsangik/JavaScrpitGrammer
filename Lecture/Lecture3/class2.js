/**
 * 
 * JS Type
 * 객체, 참조 타입 
 * 불변하지 않고 가변적이면서, 배열안에 값은 메모리 주소를 가지고 있다.
 * 즉 자바스크립트는 메모리 꾸러미를 가지고 있다고 보면 된다. 
 * 객체에서는 =이 :로 변경 된다. 
 * 변경이 자유롭기 때문에 조심해서 사용 
 */

const object = {
    name: 'hwang',
    age: 11,
    arr :[],
    func : function(){

    }
};

const array = [
    [], 11, 'hwang', function() {}];

function func() {}

//instanceof로 참조 타입 확인 
console.log(object instanceof Object); //true
console.log(func instanceof Function); //true
console.log(array instanceof Array); //true

console.log(Object.prototype.toString.call(array));

console.log(typeof func);
console.log(typeof array);

const obj = {
    str : 'string'
}

obj.str.toUpperCase()
console.log(obj);
obj.num = 123
obj.bool =true 

const arr1 = [1,2,3]
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

arr1[3] = 1000
console.log(arr1);
