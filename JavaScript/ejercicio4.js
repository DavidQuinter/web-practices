function plusMinus(arr) {
    let arrLength  = arr.length;
    let zeroNumber = [];
    let positivNumbers = [];
    let negativNumbers = [];
    arr.forEach( num =>{
        if(num > 0){
            return positivNumbers.push(num) 
        }else if(num<0){
            return negativNumbers.push(num)
        }else{
            return zeroNumber.push(num)
        }
    }
    )
    console.log(positivNumbers.length/arrLength + "\n" + negativNumbers.length/arrLength + "\n" + zeroNumber.length/arrLength )
}

plusMinus([-4, 3, -9, 0, 4, 1])