class SLL {
    constructor(){
        this.head = null;
    }
    // we're gonna add methods called..
    isEmpty(){
        if (this.head === null) {
            return true;
        }
        return false;
    }
    addToFront(node){
        node.next = this.head;
        this.head = node;
    }
    addDataToFront(data){
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }
     
    doStuf() {
        //this.head
        if (this.head !== null) {
            this.head.next;
        }
    }

}
class Node {
    constructor(){
        this.data = data;
        this.next = null;

    }
}
var node = new Node(10);


var x = [33,44,55];
var y = x;

y.push(66);
// => [33, 44, 55, 66];

console.log(x);
// => ? [33, 44, 55, 66]
//pass by refence
//pass by value

var mySLL = new SLL();

mySLL.isEmpty()

mySLL.addToFront(new Node(10));
mySLL.addDataToFront(10);

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var node = new Node(10);

var mySLL = new SLL();

mySLL.isEmpty(){
    if(this.head === null) {
        return true;
    }
    return false;
}

mySLL.addToFront(new Node(10));
mySLL.addDataToFront(10);

//More functions and knowledge

class SLL {
    constructor() {
        this.head = null;
    }

    //console log the data of every node in the current list
    read() {
        var current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    //find: return true / false if current list contains a data equal to value

    contains(value) {
        //start at the head
        var runner = this.head;
        // while we have a runner
        while (runner) {
             
            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }
        return false;
    }
}

// return true / false if the current list contains a data equal to value
// do not loop

// function calls itself 
// base case that ends the recrusive call
// change the inputs every time you call the function

recursiveContains(val, current) {
    // if you didn't pass current, current should be the head
    if (current === undefined) current = this.head;

    // if current is null, return false up the call stack
    if (current === null) return false;

    // if runner.data === value, return true up the call stack
    if (current.data === val) return true;

    // otherwise return the results of contains for current.next
    return this.recursiveContains(val, current.next);
}
// myFirstSLL.recursiveContains(13);

const isEmpty= () => {
    if (this.head === null) {
        return true;
    }
    return false;
}

// Return the total amount of nodes in the list
size(){
    let count = 0;
    if(this.head === null) {
        return count;
    }
    while(this.head !== null){
        count++
    }
    return count;
}


// Remove fromt front: remove and return the first node in the SLL
removeFromFront(){

}
// bonus: add a node to the end of the list.


addToBack(){
    
}