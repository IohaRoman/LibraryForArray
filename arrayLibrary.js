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
 * -//-//-//-//-
 * чтобы можно было сделать arrayLib.chain(arr).take(5).skip(3).map(function(x) {return x*5;}).value()
 * но и чтобы можно было сделать и как раньше, типа arrayLib.take(arr, 5)
 */

var arrayLibrary = {
    take: function take (arrayInput, number) {
        return arrayInput.splice(0, number);
    },

    skip: function (arrayInput, number) {
        return arrayInput.splice(number, arrayInput.length);
    },

    map: function (arrayInput, callback) {
        var result = [];

            for (var i = 0; i < arrayInput.length; i++) {
                if (callback(arrayInput[i])) {
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

    reduce: function (arrayInput, baseValue, callback) {
        var result;

            for (var i = 0; i < arrayInput.length; i++) {
                result = callback(arrayInput[i], baseValue);
                baseValue = result;
            }

        return result;
    },

    chain: function chain (arrayInput) {
        var result = arrayInput;

        return {
            take: function take (number) {
               return chain(arrayLibrary.take.call(this.take, arrayInput, number) );
            },

            skip: function skip (number) {
                return chain(arrayLibrary.skip.call(this.skip, arrayInput, number) );
            },

            map: function map (callback) {
                return chain(arrayLibrary.map.call(this.map, arrayInput, callback) );
            },

            value: function value () {
                return result;
            }
        }
    }
};