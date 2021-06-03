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
let result;

const updateDisplay = function () {
    display.textContent = `${displayFirst ? displayFirst : ""} ${operation ? operation : ""} ${displaySecond ? displaySecond : ""}`;
};

const getNumbers = function (array) {
    return +array.join("");
};

const doTheMath = function (symbol) {
    operation = symbol;

    firstValue = getNumbers(numbers);
    displayFirst = firstValue;

    numbers = [];
};

btnContainer.addEventListener("click", function (e) {
    e.preventDefault();

    const btn = e.target.closest(".btn");

    if (!btn) return;

    if (btn.classList.contains("number")) {
        const value = +btn.textContent;

        numbers.push(value);
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
    secondValue = getNumbers(numbers);
    displaySecond = secondValue;

    if (operation === "+") {
        const value = firstValue + secondValue;

        result = value;

        console.log(value);

        display.textContent = "";
        display.textContent = `${value}`;
    }

    if (operation === "-") {
        const value = firstValue - secondValue;

        result = value;

        console.log(value);

        display.textContent = "";
        display.textContent = `${value}`;
    }

    if (operation === "x") {
        const value = firstValue * secondValue;

        result = value;

        console.log(value);

        display.textContent = "";
        display.textContent = `${value}`;
    }

    if (operation === "÷") {
        const value = firstValue / secondValue;

        result = value;

        console.log(value);

        display.textContent = "";
        display.textContent = `${value}`;
    }
});
