class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
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
        this._to = to;
    }
}

const rangeValid = new RangeValidator(0, Infinity);

console.dir(rangeValid);
