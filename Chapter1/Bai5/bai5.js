
const myNumber = [1, 2, 3, 4, 5];
const myNumberList = myNumber.map((num,index) =>{
    console.log(`index: ${index}, value: ${num}`);
    return Math.pow(num,2);
})
console.log(myNumberList);

const ages = [32, 33, 16, 40];
const result = ages.filter(x => x >= 18);
console.log(result);