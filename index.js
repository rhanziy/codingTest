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

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 첫번째 문자열 기준
  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    // 두번째 문자열 부터 반복, 기준 문자열에 포함되지 않으면 기준 문자열 뒤에서부터 1씩 자름
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

// 가장 짧은 문자열 기준으로 비교하는 풀이
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let shortestStr = strs.reduce((shortest, current) =>
    current.length < shortest.length ? current : shortest
  );

  for (let i = 0; i < shortestStr.length; i++) {
    const char = shortestStr[i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return shortestStr.slice(0, i);
      }
    }
  }

  return shortestStr;
}

/**
 * @param {string} s
 * @return {boolean}
 */
// stack 활용한 브라켓 pair 검증
var isValid = function (s) {
  // 후입선출 자료구조
  const stack = [];
  // 닫는괄호가 나오면 stack에 쌓인 열린괄호와 비교 ㅠㅠ
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char in map) {
      const element = stack.length > 0 ? stack.pop() : "#";
      if (element !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
