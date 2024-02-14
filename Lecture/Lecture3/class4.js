// 원시값의 래퍼 객체 
const bool = false;
const num = 123;
const str = 'string';

//래퍼 객체로 만든 것들은 값은 변경할수 없다는 특징이 사라진다
//래퍼 객체로 변경 되면 메모리 자체가 달라진다. 
//valueof를 사용 하면 원시값으로 돌려놓음 
//래퍼 클래스를 사용하는 것은 추천하지는 않는다.

const bool2 = new Boolean (false);
const num2 = new Number(123);
const str2 = new String('string');

console.log(typeof bool); //boolean
console.log(bool2 instanceof Boolean); //true


const obj = {
    name : 'hwang',
    greeting : function(){
        return 'hello' + this.name
    }
}

console.log(obj.greeting())
console.log(str.toUpperCase())