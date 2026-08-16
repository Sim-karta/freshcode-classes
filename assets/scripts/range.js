const rangeGroup = document.querySelector(".range");
const rangeShowBtn = rangeGroup.querySelector(".range-show-btn");
const rangeFromBtn = rangeGroup.querySelector(".range-from-btn");
const rangeToBtn = rangeGroup.querySelector(".range-to-btn");
const rangeCheckBtn = rangeGroup.querySelector(".range-check-btn");

class RangeValidator {
    constructor() {
        this._from = -Infinity;
        this._to = Infinity;
    }

    get from() {
        return this._from;
    }

    set from(from) {
        if (!Number.isInteger(from)) {
            throw TypeError();
        }

        if (from < this.to) {
            this._from = from;
        } else {
            throw RangeError();
        }
    }

    get to() {
        return this._to;
    }

    set to(to) {
        if (!Number.isInteger(to)) {
            throw TypeError();
        }

        if (to > this.from) {
            this._to = to;
        } else {
            throw RangeError();
        }
    }

    get range() {
        return [this.from, this.to];
    }

    isValid(num) {
        return num >= this.from && num <= this.to;
    }
}

const rangeValid = new RangeValidator();

rangeShowBtn.addEventListener("click", () => {
    console.dir(rangeValid);
    console.log(`range >> ${rangeValid.range}`);
});

rangeFromBtn.addEventListener("click", () => {
    const value = Number(prompt("Введіть нижню межу (from):"));

    try {
        rangeValid.from = value;
    } catch (err) {
        console.error(err);
    }
});

rangeToBtn.addEventListener("click", () => {
    const value = Number(prompt("Введіть верхню межу (to):"));

    try {
        rangeValid.to = value;
    } catch (err) {
        console.error(err);
    }
});

rangeCheckBtn.addEventListener("click", () => {
    const value = Number(prompt("Введіть число для перевірки:"));
    console.log(`isValid(${value}) >> ${rangeValid.isValid(value)}`);
});
