// #1
let printChildren=(t)=>{
// t = tree;
console.log(tree);
}
const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                {
                    name: 'Kyle',
                    children: []
                },
                {
                    name: 'Sophia',
                    children: []
                }
            ]
        }
    ]
}
printChildren(tree)

// #2

let printChildrenRecursive =(t) => {
    // const t = tree;
    if(t.children.length === 0) {
        return;
    } 
    t.children.forEach(child => {
        console.log(child.name)
        printChildrenRecursive(child)
    })
}
const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                {
                    name: 'Kyle',
                    children: []
                },
                {
                    name: 'Sophia',
                    children: []
                }
            ]
        }
    ]
}
printChildrenRecursive(tree)