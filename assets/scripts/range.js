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
        return num > this.from && num < this.to;
    }
}

const rangeValid = new RangeValidator();

try {
    rangeValid.from = 10;
    rangeValid.to = 20;

    console.dir(rangeValid);
    console.log(rangeValid.range);
    console.log(rangeValid.isValid(-1));
} catch (err) {
    console.info(err);
}
