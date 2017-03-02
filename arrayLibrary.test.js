describe("Library testing methods (arrayLibrary.js)", function () {
    it("array of first 3 elements (take)", function () {
        expect(arrayLibrary.take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });

    it("no 3 of the first elements (skip)", function () {
        expect(arrayLibrary.skip([1, 2, 3, 4, 5], 3)).toEqual([4, 5]);
    });

    it("new array with condition (map)", function () {
        expect(arrayLibrary.map([1, 2, 3, 4, 5], function (x) {
           return x < 4;
        })).toEqual([1, 2, 3]);
    });

    it("filtering through the array function (Filter)", function () {
       expect(arrayLibrary.filter([1, 2, 3, 4, 5], function (x) {
           return x > 2;
       })).toEqual([3, 4, 5]);
    });

    it("maintaining the intermediate results (reduce)", function () {
       expect(arrayLibrary.reduce([1, 2, 3, 4, 5], 0, function (previousValue, baseValue) {
           return previousValue + baseValue;
       })).toBeCloseTo(15);
    });

});
