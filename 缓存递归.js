// 跳台阶：每次只能跳一个或者两个台阶
// 思考跳到f(n) 需要从f(n-1) 跳一个 或者是f(n-2)跳两个 f(n) = f(n-1)+f(n-2)
// 边界 [0,1,2] f(0) 无意思 f(1) == 1 f(2) == 2
function f(n) {
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  }else {
    return f(n-1) + f(n-2)
  }
}

// 缓存 结果 
let cachInfo = [,1,2]
 function fc(n) {
    if (cachInfo[n]) {
        return cachInfo[n]
    } else {
        return cachInfo[n] = fc(n-1) + fc(n-2)
    }
 }
