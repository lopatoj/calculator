import m from "mithril";

import { isDigit, isNumber } from "~/utils";

const Backend = {
  display: "",
  input: [],
  operators: {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  },
  whole: 0,
  append: (num) => {
    if (Backend.input.length === 0) {
      if (isDigit(num)) {
        Backend.input.push(num);
      } else if (num === ".") {
        Backend.input.push(0);
        whole = -1;
      }
    } else if (isNumber(Backend.input[0])) {
      if (isDigit(num)) {
        if (Backend.whole === 0) {
          Backend.input[0] = Backend.input[0] * 10 + parseFloat(num);
        } else {
          Backend.input[0] = Backend.input[0] + parseFloat(num) * Math.pow(10, Backend.whole);
          Backend.whole--;
        }
      } else if (num === ".") {
        Backend.whole = -1;
      } else if (Object.keys(Backend.operators).includes(num)) {
        Backend.input.unshift(num);
        Backend.whole = 0;
      }
    } else if (Object.keys(Backend.operators).includes(Backend.input[0])) {
      Backend.input.unshift(num);
      Backend.whole = 0;
    }
    console.log(Backend.input);
    Backend.update();
    console.log(Backend);
  },
  update: () => {
    Backend.display = Backend.input.join("");
  },
  return: () => {
    Backend.input = [];
    Backend.whole = 0;
    Backend.update();
  },
};

export default Backend;