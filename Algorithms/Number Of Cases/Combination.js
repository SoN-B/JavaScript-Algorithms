// 조합 알고리즘
// 서로 다른 n개중에 r개를 선택하는 경우의 수를 의미합니다. (순서 상관 없음)

const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두 다 push
    });

    return results; // 결과가 담긴 results를 return
};

/**
 *  구두설명
 *  if) [1,2,3,4], 3
 *
 *  반복 1)
 *  1을 선택(고정)하고 -> 나머지 [2,3,4] 중에서 2개씩 조합을 구한다. 그리고 그 각각을 고정했던 1에 이어붙인다.
 *      2을 선택(고정)하고 -> 나머지 [3,4] 중에서 1개씩 조합을 구한다. 그리고 그 각각을 고정했던 2에 이어붙인다. // selectNumber === 1인 순간, [3,4] -> [[3], [4]]가 되어 리턴됩니다.
 *          [[2,3], [2,4]] // 그리고, 현재 fixed 값인 2와 리턴된 [[3], [4]] 값을 map으로 조합합니다.
 *      3을 선택(고정)하고 -> 나머지 [4] 중에서 1개씩 조합을 구한다. 그리고 그 각각을 고정했던 3에 이어붙인다.
 *          [[3,4]]
 *      [[1,2,3], [1,2,4], [1,3,4]] 저장
 *
 *  반복 2)
 *  2을 선택(고정)하고 -> 나머지 [3,4] 중에서 2개씩 조합을 구한다. 그리고 그 각각을 고정했던 2에 이어붙인다.
 *      3을 선택(고정)하고 -> 나머지 [4] 중에서 1개씩 조합을 구한다. 그리고 그 각각을 고정했던 3에 이어붙인다.
 *          [[3,4]]
 *      [[2,3,4]] 저장
 *
 *  반복 3)
 *  3을 선택(고정)하고 -> 나머지 [4] 중에서 2개씩 조합을 구한다. 그리고 그 각각을 고정했던 3에 이어붙인다.
 *      4을 선택(고정)하고 -> 나머지 [] 중에서 1개씩 조합을 구한다. 그리고 그 각각을 고정했던 4에 이어붙인다. -> combination의 return 값이 []가 돼, 결과값이 []가된다.
 *          [] 저장
 *
 *  반복 4)
 *  4을 선택(고정)하고 -> 나머지 [] 중에서 2개씩 조합을 구한다. 그리고 그 각각을 고정했던 4에 이어붙인다.
 *      []을 선택(고정)하고 -> 나머지 [] 중에서 1개씩 조합을 구한다. 그리고 그 각각을 고정했던 []에 이어붙인다. -> combination의 return 값이 []가 돼, 결과값이 []가된다.
 *          [] 저장
 *
 * 결과) [[1,2,3], [1,2,4], [1,3,4], [2,3,4]]
 */

// https://pul8219.github.io/algorithm/algorithm-permutation-and-combination/
