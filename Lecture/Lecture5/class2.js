Number(undefined) //NaN (Not a Number)
Number(null) //0
Number('')  //0
Number('String')    //Nan
Number(true)    //1
Number(false)   //0
Number(3.141592)    //3.141592

console.log(+true);

const strNumber = '1111'

if (Number(strNumber)){
    console.log("실행")
}