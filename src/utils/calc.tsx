export const formatCirculatingSupply = (value: number) => {
    let numArray = Math.floor(value).toString().split("")

    for (let i=numArray.length-3;i>0;i-=3) 
        numArray.splice(i,0,",")

    return numArray.join("")
}