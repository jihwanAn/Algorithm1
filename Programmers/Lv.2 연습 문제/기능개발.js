// 첫 작업의 완료 일자 기준으로 하여 뒤 작업들이 일자에 맞춰 배포 가능한지?
// 현재 배포 가능한 마지막 작업 완료 일자보다 빨리 완료된 작업들 -> 같은 날 배포
// 새로운 작업이 현재 배포 일자보다 늦게 완료 될 경우 새로운 배포 일자 시작

// O(n) 시간 복잡도, 각 작업의 완료 일수 계산 O(n) / 완료 일수 기반 배포 일정 계산 O(n)

// console.log(sol([93, 30, 55], [1, 30, 5]));
// console.log(sol([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

function sol(progresses, speeds) {
  // 작업 완료 일수
  const days = progresses.map((progress, idx) => {
    return Math.ceil((100 - progress) / speeds[idx]);
  });

  // 배포 일정
  const ans = [];
  let currDeployDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= currDeployDay) {
      count++;
    } else {
      ans.push(count);
      currDeployDay = days[i];
      count = 1;
    }
  }

  ans.push(count);

  return ans;
}
