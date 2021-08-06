// 根据二叉树的层级序列结果绘制二叉树
const result = ['a','b','c','d','#','#','e','#','f','#','#','#','#']

function treeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}
const buildTree = (arr) => {
    let root = null 
    let queue = []
    if (arr[0] !== undefined) {
        root = new treeNode(arr.shift())
        queue.push(root)
        while(queue.length !== 0 ) {
            let head = queue.shift()
            let value = arr.shift()
            if (value !== "#") {
                head.left = new treeNode(value)
                queue.push(head.left)
            }
            let val = arr.shift()
            if (val !== "#") {
                head.right = new treeNode(val)
            }
        }
    }
    return root
}
let tree = buildTree(result)
console.log(tree)


