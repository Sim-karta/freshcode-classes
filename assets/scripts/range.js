class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}

const rangeValid = new RangeValidator(0, Infinity);

console.dir(rangeValid);
