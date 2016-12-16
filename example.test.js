describe('Example of testing with Jasmine and Karma', function () {

    beforeEach(function() {
        importScripts(LibraryForArray.js);
        js.type = "text/javascript";
        js.src = LibraryForArray;
        var liba = new arrayLibrary();
    });

    it("array of first 3 elements (take)", function () {
        expect(liba.take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });

    it("no 3 of the first elements (skip)", function () {
        expect(liba.skip([1, 2, 3, 4, 5], 3)).toEqual([4, 5]);
    });

    it("new array with condition (map)", function () {
        expect(liba.map([1, 2, 3, 4, 5], function(x){return x<4})).toEqual([1, 2, 3]);
    });

   it("iterate array (forEach)", function () {
        expect(liba.forEach(["Яблоко ", "Апельсин ", "Груша"], function(arr){alert("(массив:" + arr + ")");
        }).toEqual(true));
    });

    it("array filter (filter)", function () {
        expect(liba.filter([1, 2, 3, 4, 5], function(x) {return x > 2}));
        }).toEqual(3, 4, 5);

    it("array filter (reduce)", function () {
        expect(liba.reduce([1, 2, 3, 4, 5], function(sum, current) {return sum + current;}, 0));}).toEqual(15);

});

