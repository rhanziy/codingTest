// 분, 초 구현문제.

function convertToSec(formatString) {
  const [m, s] = formatString.split(":").map(Number);

  return 60 * m + s;
}

function convertToFormatString(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");

  return m + ":" + s;
}

function isInsideOp(cur_sec, op_start, op_end) {
  const ops = convertToSec(op_start);
  const opend = convertToSec(op_end);

  return ops <= cur_sec && cur_sec <= opend;
}

function next(cur_sec, end_sec) {
  const result = cur_sec + 10;

  if (result >= end_sec) {
    return end_sec;
  }

  return result;
}
function prev(cur_sec) {
  const result = cur_sec - 10;

  if (result < 0) {
    return 0;
  }
  return result;
}

function solution(video_len, pos, op_start, op_end, commands) {
  let cur_sec = convertToSec(pos);
  const end_sec = convertToSec(video_len);

  commands.forEach((command) => {
    if (command === "next") {
      if (isInsideOp(cur_sec, op_start, op_end)) {
        cur_sec = convertToSec(op_end);
      }
      cur_sec = next(cur_sec, end_sec);
    } else {
      cur_sec = prev(cur_sec);
    }
    if (isInsideOp(cur_sec, op_start, op_end)) {
      cur_sec = convertToSec(op_end);
    }
  });

  return convertToFormatString(cur_sec);
}
