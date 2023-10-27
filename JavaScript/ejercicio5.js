function miniMaxSum(arr) {
    let arrSorted = [... arr].sort((a,b)=>a-b)
    let sortedpop = [... arrSorted].pop()
    let sortedshift = [... arrSorted].shift()
    let totalMin = arrSorted.reduce((a, b)=> a + b, 0) - sortedpop;
    let totalMax= arrSorted.reduce((a, b)=> a + b, 0) - sortedshift;
    console.log(totalMin + " " + totalMax)
}
miniMaxSum([1,2,3,4,5])