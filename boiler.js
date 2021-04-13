// let someAlgo =(nums,n)=>{
//     var nums = [];
//     var result = [];
//     var max = 0;
//     for(let i = 0; i<nums.length; i++){
//         if (nums[i]>max){
//             max = nums[i];
//             return max;
//         }
//     }
//     console.log(result.push(max));
// }
// someAlgo([5,6,11,23], 5);
// Needs some more work

// Algo 2
// let str = ["2,4","7","1,8","14,9,56"]
// let outcome = [];
// let longeststring = 1;
//  function sortString(){
//      for(let i = 0; i<str.length; i++){
//          for(let j = 0; j<str.length; j++){
//              if(str[i][j]>longeststring){
//                  longeststring=str[i][j];
//                  outcome.push(longeststring);
//                  console.log(outcome);
//              }
//              console.log("I still run here too!")
//          }
//     }
//     console.log("How now?")
// }
// // console.log(outcome);
//  sortString();

// Algo 3

// function stringFind(str, n){
//     var str = "a,b,c,d,e,f,g,h,i,j";
//     var n = "Isaac";
//     const result =[];
//     const midStr = str.indexOf(str);
//     for(let i=0;i<midStr.length;i++){
//         result.push(midStr + n);
//         console.log(result);
//     }
// }
// stringFind();

// Algo 3
//SLL
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
      this.head = null;
      this.size = 0;
  }
  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  // console log (print) data of every node in the current list
  read(){
      var current = this.head; // set current as the head, if it exists or not
      while(current) { // if current, log and move to the current.next
        console.log(current.data);
        current = current.next;
      }
  }
  //find: return true / false if the current list contains a data equal to value
  contains(value) {
      // start at the head
      var runner = this.head;

      // while we have the runner
      while (runner) {
          // return true if data === value
          if(runner.data === value) {
              return true;
          }
          // otherwise advance the runner
          runner = runner.next;
      }
      // if the while loop completes, return false
      return false;
  }
    rotateRight = (k) => {
      var temp = this.head;
    };
  }


const LL = new SLL();

LL.insertFirst(100);

console.log(LL);


