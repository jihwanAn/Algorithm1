// n > 2
// console.log(solution(3));
// console.log(solution(5));

function solution(n) {
  // 초기값 : F(0) = 0, F(1) = 1
  let prev = 0; // F(n-2)
  let curr = 1; // F(n-1)

  for (let i = 2; i <= n; i++) {
    let temp = (prev + curr) % 1234567; // 현재 피보나치 수
    prev = curr; // 이전 값을 현재 값으로 업데이트
    curr = temp; // 현재 피보나치 수를 업데이트
  }

  return curr; // n번째 피보나치 수 반환
}
