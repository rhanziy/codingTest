/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 원패스 해시테이블
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
};

//hashMap으로 접근. target - number 가 hashMap에 있으면 현재인덱스와 해당인덱스 반환 ㅠㅠ
var twoSum2 = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const diff = target - current;

    if (map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[current] = i;
    console.log(map);
  }
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x.toString();
  let half = Math.floor(str.length / 2);

  for (let i = 0; i < half; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

var romanToInt = function (s) {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    // 앞에 붙는 특정 로마자만 값이 빠지니까 마지막 문자열은 무조건 더하기.
    if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
      sum -= roman[s[i]];
    } else {
      sum += roman[s[i]];
    }
  }

  return sum;
};

romanToInt("MCMXCIV");
