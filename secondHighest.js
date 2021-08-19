let highestNum = (y,val) => {
    y.splice(4,0,val);
    y.sort((a,b)=>{return b-a});
    y
    console.log(y);
}
highestNum([3,5,1,7,4,11],48);
