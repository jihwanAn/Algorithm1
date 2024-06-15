// const input = "(()(";
// console.log(sol(input));

// 스택 , O(n) 시간 복잡도
function sol(s) {
  const stack = [];

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
