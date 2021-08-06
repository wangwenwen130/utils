
let mid = [1,2,4,7,3,5,6,8]
let front = [4,7,2,1,5,3,8,6]
function treeNode (node){
    this.leftNode=''
    this.rightNode=''
    this.node=node
}
function rebuildTree(front,mid){
    let _mid = mid 
    let _front = front
    if (_front[0]){
        let root = _front[0]
        let index = _mid.indexOf(root)
        let left = rebuildTree(_front.slice(1,index+1),_mid.slice(0,index))
        let right = rebuildTree(_front.slice(index+1),_mid.slice(index+1))
        let Node = new treeNode(root)
        Node.leftNode = left
        Node.rightNode = right
        return Node
    }
}
let node = rebuildTree(mid,front)
console.log(node)

const build = (fro,mid)=>{
 if(fro[0]){
     let index = mid.indexOf(fro[0])
     let left = build(fro.slice(1,index+1),mid.slice(0,index))
     let right = build(fro.slice(index+1),mid.slice(index+1))
     let node = new treeNode(fro[0])
     node.leftNode = left
     node.rightNode = right
     return node
 }
}

console.log(build(mid,front))

let pushStack = []
let popStack = []
function  push (val) {
    pushStack.push(val)
}
function pop () {
    while(pushStack.length > 0){
        popStack.push(pushStack.pop())
    }
    let val = popStack.pop()
    while(popStack.length > 0){
        pushStack.push(popStack.pop())
    }
    return val
}

push(1)
push(2)
push(3)
pop()