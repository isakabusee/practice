const findUniqueChars = (z) => {
    let uniq = "";
    for(let i = 0; i<z.length; i++){
       if(uniq.includes(z[i]) === false) {
           uniq += z[i]
       } 
    }
    return uniq
}
console.log(findUniqueChars("Isaac"));