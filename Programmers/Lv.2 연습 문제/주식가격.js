// prices[i]에 대해, 모든 나머지 prices[j] 검사하는 중첩 반복 사용할 경우 → O(n^2)
// while 루프 + stack → O(n)

// console.log(sol([1, 2, 3, 2, 3]));
function sol(prices) {
  const N = prices.length;
  const ans = Array(N).fill(0);
  const stack = [];

  for (let i = 0; i < N; i++) {
    // 현재 가격이 스택의 마지막 가격보다 낮을 동안
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const idx = stack.pop();
      ans[idx] = i - idx; // 가격이 떨어진 기간, ans에 저장
    }
    stack.push(i);
  }

  // 스택에 남아있는 인덱스 처리
  while (stack.length > 0) {
    const idx = stack.pop();
    ans[idx] = N - 1 - idx; // 끝까지 가격 떨어지지 않은 기간, ans에 저장
  }

  return ans;
}
