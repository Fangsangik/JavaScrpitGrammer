//문자열로 반환 
//String mapping 만으로 충분하다 
String(1230) // "1230"
String(undefined) //undefined
String(null) // null

String({}) //[object, Object]
String({name : 'Hwang'}) // '123'

//Json.stringify는 원시값을 변환할때 사용 
JSON.stringify({name : "hwang"}) // {"name" : "hwang"}

//toString

String(true);
Boolean('false');
