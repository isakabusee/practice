// let printNums=(n) => {
//     for(let i=1; i < n; i++){
//         console.log(i)
//     }

// }
// printNums(13)
let battleShip =()=>{

    const arr = [
        [".",".",".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".",".",".","."]

        
    ]
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){
            console.log(arr[i][j])
        }
    }
}
battleShip()