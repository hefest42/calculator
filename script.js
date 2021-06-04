"use strict";

const display = document.querySelector(".display");
const btnContainer = document.querySelector(".button-container");
const buttons = document.querySelectorAll(".btn");
const operations = document.querySelectorAll(".operation"); //? all operations(+, -, /, *, .)
const btnEqual = document.querySelector(".btn-equal");
const btnClear = document.querySelector(".btn-clear");

let numbers = [];
let displayNumbers = [];
let working = true;

const updateDisplay = function () {
  display.textContent = displayNumbers.join("");
};

const addNumber = function (operation, display) {
  numbers.push(operation);
  displayNumbers.push(display);
};

btnContainer.addEventListener("click", function (e) {
  const btn = e.target.closest(".number");

  if (!btn) return;

  if (working) {
    const value = btn.textContent;

    addNumber(value, value);

    updateDisplay();
  }
});

operations.forEach((operation) =>
  operation.addEventListener("click", function (e) {
    const btn = e.target.closest(".operation");

    if (!btn) return;

    if (btn.textContent === "x") addNumber("*", "x");
    if (btn.textContent === "÷") addNumber("/", "÷");
    if (btn.textContent === "+") addNumber("+", "+");
    if (btn.textContent === "-") addNumber("-", "-");
    if (btn.textContent === ".") addNumber(".", ".");

    working = true;
    updateDisplay();
  })
);

btnEqual.addEventListener("click", function (e) {
  const allNumbers = numbers.join("");

  const result = eval(allNumbers);
  const displayResult = result % 1 !== 0 ? result.toFixed(3) : result;

  numbers = [];
  displayNumbers = [];

  addNumber(result, displayResult);

  working = false;
  updateDisplay();
});

btnClear.addEventListener("click", function (e) {
  numbers = [];
  displayNumbers = [];

  updateDisplay();
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 8) {
    numbers.pop();
    displayNumbers.pop();

    updateDisplay();
  }
});
//! Version 1.0
/*
const numbertest = [];
let numbers = [];
let firstValue, secondValue;
let operation;
let displayFirst, displaySecond;

const updateDisplay = function () {
    display.textContent = `${displayFirst ? displayFirst : ""} ${operation ? operation : ""} ${displaySecond ? displaySecond : ""}`;
};

const getNumbers = function (array) {
    return +array.join("");
};

const doTheMath = function (symbol) {
    operation = symbol;

    firstValue = getNumbers(numbers);

    numbers = [];

    updateDisplay();
};

btnContainer.addEventListener("click", function (e) {
    e.preventDefault();

    const btn = e.target.closest(".btn");

    if (!btn) return;

    if (btn.classList.contains("number")) {
        const value = +btn.textContent;

        numbers.push(value);
        numbertest.push(value);

        if (!operation) {
            displayFirst = getNumbers(numbers);
            updateDisplay();
        }

        if (operation) {
            displaySecond = getNumbers(numbers);
            updateDisplay();
        }
    }
});

btnPlus.addEventListener("click", function (e) {
    doTheMath("+");
    numbertest.push("+");
});

btnMinus.addEventListener("click", function (e) {
    doTheMath("-");
    numbertest.push("-");
});

btnDivide.addEventListener("click", function () {
    doTheMath("÷");
    numbertest.push("/");
});

btnMultipy.addEventListener("click", function () {
    doTheMath("x");
    numbertest.push("*");
});

btnEqual.addEventListener("click", function () {
    let value;
    if (firstValue) secondValue = getNumbers(numbers);

    if (firstValue && secondValue) {
        if (operation === "+") value = firstValue + secondValue;

        if (operation === "-") value = firstValue - secondValue;

        if (operation === "x") value = firstValue * secondValue;

        if (operation === "÷") value = firstValue / secondValue;

        numbers = [];
        display.textContent = "";
        display.textContent = `${value % 1 !== 0 ? value.toFixed(4) : value}`;
    }
});

const testfunc = function () {
    const numbers = numbertest.join("");
    const results = eval(numbers);
    console.log(numbers);

    console.log(results);
};

*/
