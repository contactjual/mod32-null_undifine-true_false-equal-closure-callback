function stopWatch (){
    count = 0;
    return function (){
        count++;
        return count;
    }
}
console.log(stopWatch());

const demo1 = stopWatch();
console.log(demo1());
console.log(demo1());
console.log(demo1());
console.log(demo1());
const demo2 = stopWatch();
console.log(demo2());
console.log(demo2());
console.log(demo2());
console.log(demo2());