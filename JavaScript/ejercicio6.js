function timeConversion(s) {
    let unconvertedTime = s;
    let hoursUnconvertedTime = unconvertedTime[0] + unconvertedTime[1];
    let lenghtStrTime = unconvertedTime.length;
    let getdayPart =  unconvertedTime[lenghtStrTime - 2] + unconvertedTime[lenghtStrTime - 1];
    let convertedTime;
    if(getdayPart=="PM"){
        convertedTime = `${ hoursUnconvertedTime != 12 ? (Math.floor(hoursUnconvertedTime) + 12) : "12" }` + ":" + `${unconvertedTime[3] + unconvertedTime[4]}` + ":" + `${unconvertedTime[6] + unconvertedTime[7]}`;
    }else{
        convertedTime = `${ Math.floor(hoursUnconvertedTime) != 12 ? hoursUnconvertedTime : "00" }` + ":" + `${unconvertedTime[3] + unconvertedTime[4]}` + ":" + `${unconvertedTime[6] + unconvertedTime[7]}`;
    }
    console.log(convertedTime)

}

timeConversion("12:45:54PM")