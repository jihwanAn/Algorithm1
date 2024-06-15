// 1. 이모티콘 플러스 가입자를 최대한 늘리기
// 2. 이모티콘 판매액 최대한 늘리기

// 가입자 수가 최대가 되는 조합
// => 여러개일 경우, 그 중 이모티콘 판매액이 최대가 되는 조합

// 사용자 n명, 이모티콘 개수 m개, 각각 할인율 10%, 20%, 30%, 40% 중 하나
// 시간복잡도 O(4^m * n)

const users = [
  [40, 10000],
  [25, 10000],
];
const emoticons = [7000, 9000];
console.log(solution(users, emoticons));

function solution(users, emoticons) {
  const discountRates = [10, 20, 30, 40];
  const m = emoticons.length;

  let bestServiceCount = 0;
  let bestSalesAmount = 0;

  // 모든 가능한 할인율 조합 생성
  function getAllCombinations(arr, length) {
    if (length === 1) return arr.map((el) => [el]);

    return arr.reduce((acc, el) => {
      return acc.concat(
        getAllCombinations(arr, length - 1).map((comb) => [el, ...comb])
      );
    }, []);
  }

  // 이모티콘의 모든 가능한 할인율 조합
  const discountCombinations = getAllCombinations(discountRates, m);

  discountCombinations.forEach((discounts) => {
    let serviceCount = 0; // 현재 가입자 수
    let salesAmount = 0; // 현재 판매액

    users.forEach((user) => {
      const minDiscountRate = user[0]; // 사용자가 관심을 가지는 최소 할인율
      const userBudget = user[1]; // 사용자가 지출할 최대 예산

      let totalCost = 0; // 사용자가 지출할 총 비용

      // 각 이모티콘에 대해 할인율을 적용하여 총 비용 계산
      emoticons.forEach((price, i) => {
        if (discounts[i] >= minDiscountRate) {
          totalCost += Math.floor((price * (100 - discounts[i])) / 100);
        }
      });

      // 사용자가 예산을 초과하면 서비스 가입
      if (totalCost >= userBudget) {
        serviceCount++;
      } else {
        salesAmount += totalCost;
      }
    });

    // result
    if (
      serviceCount > bestServiceCount ||
      (serviceCount === bestServiceCount && salesAmount > bestSalesAmount)
    ) {
      bestServiceCount = serviceCount;
      bestSalesAmount = salesAmount;
    }
  });

  return [bestServiceCount, bestSalesAmount];
}
