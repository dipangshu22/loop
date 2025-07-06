let user=prompt("enter the no")

let arr=[]

for(let i=1; i<=user; i++){
    arr[i-1]=i
}


let output=arr.reduce((a,b)=>{
    return a+b
})

console.log(output)