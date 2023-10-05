const sumIntervals = require('./sumOfIntervals');

describe("sumIntervals", () => {
    it("should return the correct sum for non overlapping intervals", () => {
        expect(sumIntervals([[1,5]])).toBe(4);
        expect(sumIntervals([[1,5],[6,10]])).toBe(8);
        });
    it("should return the correct sum for overlapping intervals", () => {
        expect(sumIntervals([[1,5],[1,5]])).toBe(4);
        expect(sumIntervals([[1,4],[7, 10],[3, 5]])).toBe(7);
        });
})