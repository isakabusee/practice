class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // Insert first node
    inserFirst(data){
       this.head = new Node(data, this.head);
       this.size++;
    }
    displayList(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }

    }
    insertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node;
        } else {
            current = this.head

            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    // Insert at index
    insertAt(data, index){
        // If index is out of range
        if(index > 0 && index > this.size){
            return;
        }
        // if first index
        if(index === 0) {
            this.head = new Node(data, this.head);
            return
        }
        const node = new Node(data);
        let current, previous;

        // set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after the index
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }
    // Get at index
    getAt(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

}
const ll = new LinkedList();
ll.inserFirst(100);
ll.insertLast(500);
ll.insertAt(600,2);
// ll.removeAt(1)
ll.displayList();
// ll.printLinkedList(

// const beasts = ['dog', 'bison', 'cow', 'duck', 'goat', 'mosquito', 'lion'];
// console.log(beasts.indexOf('mosquito'));

// // const myArr = [];
// // console.log([4,7,1,2,9]);
// let justTesting=() => {
   
// }
// justTesting(console.log("  Something here  "));

// var ages = [4, 10, 18, 23];
// let checkAdult=(age) => {
//     return age >= 18;
// }
// checkAdult(console.log(ages.indexOf(23)));

// var combinationSum3 = function(k,n){
//     var k = 4;
//     var n = 10;
//     for(let i = 0; i<nums.length; i++){
//         if(k+=i && n-k==i){
//             return i;
//         }
//     }
//     // console.log(i);
// }
// combinationSum3()


    // what I have learned so far.. Needs alittle more work
    // var k = 0;
    // var n = 0;
    // var nums = 1;
    // while(k!=nums, k>0 && n<=9){
    //     if(k + nums == n && (nums + nums == k)+nums ==n ){
    //         nums++
    //     }

    // }
    // console.log(nums);
// }
// combinationSums(4,10);
