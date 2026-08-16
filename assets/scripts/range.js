class RangeValidator {
    constructor(from, to) {
        this._from = from;
        this._to = to;
    }

    get from() {
        return this._from;
    }

    set from(from) {
        this._from = from;
    }

    get to() {
        return this._to;
    }

    set to(to) {
        if (to > this.from) {
            this._to = to;
        } else {
            this._to = this.from;
        }
    }

    get range() {
        return [this.from, this.to];
    }

    isValid(num) {
        return num > this.from && num < this.to;
    }
}

const rangeValid = new RangeValidator(0, Infinity);

console.dir(rangeValid);
console.log(rangeValid.range);
console.log(rangeValid.isValid(-1));
