class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }
    print() {
        console.log("Print a list")
        var current = this.head;
        while (current) {
            process.stdout.write(current.data + " ");
            current = current.next;
        }
        current.log();
    }
    getHead() {
        return this.head;
    }addToback() {
        
    }
}

var mySLL = new SLL();
mySLL.addDataToFront(6);
mySLL.addDataToFront(4);