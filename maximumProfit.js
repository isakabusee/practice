maximumProfit = (prices)=>{
    for(let i=0; i<prices.length-1; i++){
       
        
        const profit = Math.max(Math.abs(prices[i]+prices[i+1]))
        console.log(profit);
    }
}
maximumProfit([6,0,-1,10])