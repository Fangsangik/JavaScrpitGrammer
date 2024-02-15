/**
 * 형 변환 
 */

//()안에 필수로 값이 들어와야 한다 
parseInt(undefined) //10진수를 기대 한다 (몇진수 인지 넘겨야 한다. )
Number()

function parseInt2(value, radix) {
    if(radix === undefined){
        return Number(value)
    }

    return
}
