console.log(sol("AAAAE"));
console.log(sol("EIO"));

function sol(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const lengths = [781, 156, 31, 6, 1]; // 각 길이별 단어의 개수
  let ans = 0;

  for (let i = 0; i < word.length; i++) {
    const idx = vowels.indexOf(word[i]);
    ans += idx * lengths[i] + 1;
  }

  return ans;
}

function sol(words) {
  return words
    .split("")
    .reduce(
      (r, c, i) =>
        r + [781, 156, 31, 6, 1][i] * ["A", "E", "I", "O", "U"].indexOf(c) + 1,
      0
    );
}
