function breakingRecords(scores) {
    let results = new Array(2)
    let maxScore = []
    let minScore = []
    let max = scores[0];
    let min = scores[0];
    scores.forEach(e => {
        if(e < min){
            minScore.push(e)
            min = e;
        }else if(e>max){
            max = e;
            maxScore.push(e)
        }
    });
    results[0]= maxScore.length
    results[1]= minScore.length
    return results
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])