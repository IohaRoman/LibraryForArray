describe('Example of testing with Jasmine and Karma', function () {

    beforeEach(function() {
      //  importScripts("/arrayLibrary.js");
      //  js.type = "text/javascript";
      //  js.src = 'arrayLibrary.js';
      //  include("arrayLibrary.js");
    });

    it("array of first 3 elements (take)", function () {
        expect(app.arrayLibrary.take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });

    it("no 3 of the first elements (skip)", function () {
        expect(app.arrayLibrary.skip([1, 2, 3, 4, 5], 3)).toEqual([4, 5]);
    });

    it("new array with condition (map)", function () {
        expect(app.arrayLibrary.map([1, 2, 3, 4, 5], function(x){return x < 4})).toEqual([1, 2, 3]);
    });

    it("iterate array (forEach)", function () {
        expect(app.arrayLibrary.forEach(["testMessage1 ", "testMessage2 ", "testMessage3 "], function(arr){alert("(array:" + arr + ")");
        }).toEqual(true));
    });

    it("array filter (filter)", function () {
        expect(app.arrayLibrary.filter([1, 2, 3, 4, 5], function(x) {return x > 2}));
        }).toEqual(3, 4, 5);

    it("array filter (reduce)", function () {
        expect(app.arrayLibrary.reduce([1, 2, 3, 4, 5], function(previousValue, baseValue) {return previousValue + baseValue;}, 0));}).toEqual(15);

});