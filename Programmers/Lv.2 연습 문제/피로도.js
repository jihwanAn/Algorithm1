// console.log(sol(80, [[80, 20], [50, 40], [30, 10]]));
// 현재 피로도, [최소 필요, 소모 되는 피로도]

// 던전 개수 8개로 제한되어 있으므로, 완전 탐색 가능하지만
// 깊이 우선 탐색(DFS) 유리
function sol(k, dungeons) {
  const N = dungeons.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      // 현재 피로도가 최소 필요 피로도 이상, 해당 던전을 아직 방문하지 않은 경우
      if (k >= dungeons[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - dungeons[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }

  dfs(k, 0);
  return ans;
}
