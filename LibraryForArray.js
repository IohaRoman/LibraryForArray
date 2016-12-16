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

(function(){
    var arrayLibrary = {};

    arrayLibrary.take = function (arrayInput,number) {
        var arrayReturn = new Array(number);

        for (var i = 0; number != i; i++) {
            arrayReturn[i] = arrayInput[i];
        }
        return (arrayReturn);
    };

    arrayLibrary.skip = function (arrayInput, number) {
        var arrayReturn = new Array(number);
        var i = number;

        while (i < arrayInput.length) {
            arrayReturn[i] = arrayInput[i];
            i++;
        }

        return (arrayReturn);
    };

    arrayLibrary.map = function (arrayInput, callback) {
        var arrayReturn = [];

        for (var i = 0; i != arrayInput.length; i++) {
            if(callback) {
                arrayReturn[i] = callback(arrayInput[i]);
            }
        }
        return arrayReturn;
    };

    return arrayLibrary;
}());
