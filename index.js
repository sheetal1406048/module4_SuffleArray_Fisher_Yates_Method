var array = [1,2,34,5,4,31,33,23,234];
var arrayNew = [];

console.log(array.length) //9
for(var i = array.length-1; i > 0 ; i--){
     var k = Math.round(Math.random()*(i-1));
    //8 3
    // 7 4
    // 6 5
    // 5 3
    // 4 1
    // 3 1
    // 2 0
    // 1 0

    console.log(i,k);
    [array[i],array[k]]= [array[k],array[i]]
}

console.log(array) //  33, 34, 1, 23, 2, 234, 31, 4,  5 //randomly generated 
arrayNew = array.splice(0,5)
console.log(arrayNew)//33, 34, 1, 23, 2