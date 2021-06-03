"use strict";

const display = document.querySelector(".display");
const btnContainer = document.querySelector(".button-container");
const buttons = document.querySelectorAll(".btn");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");
const btnDivide = document.querySelector(".btn-divide");
const btnMultipy = document.querySelector(".btn-multiply");
const btnEqual = document.querySelector(".btn-equal");

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
});

btnMinus.addEventListener("click", function (e) {
    doTheMath("-");
});

btnDivide.addEventListener("click", function () {
    doTheMath("÷");
});

btnMultipy.addEventListener("click", function () {
    doTheMath("x");
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
