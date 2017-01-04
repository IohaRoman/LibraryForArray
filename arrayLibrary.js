/**
 * Тебе нужно будет реализовать библиотеку для работы с массивамив ней будут следующие методы
 *   take(array, n) - возвращает массив, состоящий из первых n элементов массива array
 *   skip(array,n) - массив без n первых элементов из array
 *   map(array, callback) - прогоняет каждый элемент из array через callback и записывает его в новый массив, который и возвращает
 *   forEach(array,callback) - прогоняет элементы массива через функцию callback, ничего не возвращает
 *   filter(array,callback) - возвращает массив, в котором находятся элементы, которые успешно прочшли через callback
 например filter([1,2,3], function(x) {return x > 1}) вернет [2,3]
 *   reduce(array, callback, baseValue) - сам почитаешь, он посложнее
 * Все они, кроме forEach, будут возвращать тебе массив с результатом
 */
var arrayLibrary = {
    take: function (arrayInput, number) {
        return arrayInput.splice(0, number, arrayInput);
    },

    skip: function (arrayInput, number) {
        return arrayInput.splice(number, arrayInput.length, arrayInput);
    },

    map: function (arrayInput, callback) {
        var result = [];

        for (var i = 0; i < arrayInput.length; i++) {
            if (callback(arrayInput[i])){
                result.push(arrayInput[i]);
            }
        }
        return result;
    },

    forEach: function (arrayInput, callback) {
        for (var i = 0; i < arrayInput.length; i++) {
            callback(arrayInput[i]);
        }
    },

    filter: function (arrayInput, callback) {
        var result = [];

        for (var i = 0; i < arrayInput.length; i++) {
            if (callback(arrayInput[i])) {
                result.push(arrayInput[i]);
            }
        }
        return result;
    },

    reduce: function (arrayInput,  baseValue, callback) {
        var returnValue;

        for (var i = 0; i < arrayInput.length; i++) {
            returnValue = callback(arrayInput[i], baseValue);
            baseValue = returnValue;
        }
        return returnValue;
    }
};
