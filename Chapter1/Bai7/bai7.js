const firstArr =[1, 2, 3, 4, 5];
const secondArr = [6, 7, 8, 9, 10];
const thirdArr =[...firstArr, ...secondArr];
const fourthArr = [...secondArr,...firstArr];
const myArr=["Dog", "Cat", "Bird", "Fish"];
const newMyArr = [...myArr, "Hamster", "Rabbit"];

const info ={
    name:"Duong",
    age: 22,
    address: "Ha Noi"
}
const updateInfo={age: 23, address: "Hai Phong"};
const updatedInfo = {...info, ...updateInfo};
console.log(updatedInfo);
