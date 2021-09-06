let mutateTheArray=(n,a)=>{
    let sum=0;
    let b=[];
    for(let i=0; i<a.length-1; i++){
        const b = a;
        if(b[i]==null){
            return 0;
        }
        sum = a[i-1]+a[i] + a[i+1]
        console.log(sum);
    }

}
mutateTheArray(5,[4,0,1,-2,3])