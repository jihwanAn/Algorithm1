// [택배 배달과 수거하기]
// cap 만큼의 공간을 사용하여 배달/회수 수행해야함
// 한번 물류창고에서 출발 -> 복귀하는 동안, 최대 cap만큼의 배달과 cap만큼의 회수 가능
// 한 곳에서 택배를 전부 배달이나 회수를 못했다면, 물류창고로 돌아왔다가, 다시 같은 장소로 떠나야 함
// ex) deliveries[i] = 2, pickups[i] = 3 이고 cap = 3 이라고 하면, pickups 1 만큼의 잉여 회수량 발생

function solution(cap, n, deliveries, pickups) {
  let ans = 0;
  let d = 0; // 배달할 잔여량
  let p = 0; // 회수할 잔여량

  // 배열 역순으로 순회
  for (let i = n - 1; i >= 0; i--) {
    let cnt = 0; // 왕복 횟수

    // 현재 위치의 배달 및 회수량 차감
    d -= deliveries[i];
    p -= pickups[i];

    // 배달할 잔여량(d) || 회수할 잔여량(p)이 남아 있을 때
    // 한 번의 왕복으로 cap 만큼 배달/회수할 수 있으므로,
    // 잔여량이 0 이상이 될 때까지 반복
    while (d < 0 || p < 0) {
      d += cap; // cap 만큼 배달량 채움
      p += cap; // cap 만큼 회수량 채움
      cnt += 1;
    }

    // (i + 1) * 2는 현재 위치까지의 왕복 거리
    ans += (i + 1) * 2 * cnt;
  }

  return ans;
}
