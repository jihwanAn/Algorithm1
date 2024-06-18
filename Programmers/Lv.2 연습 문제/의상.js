// console.log(
//   sol([
//     ["yellow_hat", "headgear"],
//     ["blue_sunglasses", "eyewear"],
//     ["green_turban", "headgear"],
//   ])
// );

function sol(clothes) {
  // 의상 종류별 개수를 해시 테이블에 저장
  const counter = {};
  let ans = 1;

  clothes.forEach(([name, kind]) => {
    counter[kind] = (counter[kind] || 0) + 1;
  });

  // 모든 경우의 수
  for (let count of Object.values(counter)) {
    ans *= count + 1;
  }

  // 아무 것도 입지 않은 경우 제외
  return ans - 1;
}
