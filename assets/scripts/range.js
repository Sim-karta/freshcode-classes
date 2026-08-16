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
        if (to > this.from) {
            this._to = to;
        } else {
            this._to = this.from;
        }
    }
}

const rangeValid = new RangeValidator(0, -1);

console.dir(rangeValid);
