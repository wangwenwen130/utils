// 前序序列
const preLeverArr = ['a','b','d','#','f','#','#','#','c','#','e','#','#']
function treeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}
const creatTree = (arr) => {
    let root = null
    let head = arr.shift()
    if (head!=='#') {
        root = new treeNode(head)
        root.left = creatTree(arr)
        root.right = creatTree(arr)
    }
    return root
}
let tree = creatTree(preLeverArr)
console.log(tree)
