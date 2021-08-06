const sort = (arr)=>{
    let left = []
    let right = []
    let baseNum = arr[0]
    let i =1,len = arr.length
    for(i;i<len;i++){
        if (arr[i] < baseNum){
            right.push(arr[i])
        } else{
            left.push(arr[i])
        }
    }
    
    if (left.length >= 2)left= sort(left)
    if (right.length >= 2)right= sort(right)
    return right.concat(baseNum,left)
}

// mode default sort
let arr =  sort ([2,18,5,9,6,7,5,1,3,8,45,87,35,867])
console.log(arr)