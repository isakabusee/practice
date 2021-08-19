const obj = {
    a:1,
    b:2,
    getA(){
        console.log(this.a);
        return this;
    },
    getB(){
        console.log(this.b);
    }
};
console.log(obj.getA().getB());

// // printing elements in the array
// // [1,2].print(); // 1,2
// Array.prototype.print = () => {
//     let result = '';
//     this.forEach(el => {
//         result += `${el},`;
//         console.log(result);
//     })
// }

const a = ["a", "b", "c"];
a.forEach(function(thlist){
    console.log(thlist);
});

// // how to create and clone a new object

// const someObj = {
//     a: {
//         b: {
//             c:1
//         }
//     }
// };
// const clone = json.parse(json.stringify(someObj))

// clone.a.b.c = 1;
// console.log(someObj.a.b.c);

