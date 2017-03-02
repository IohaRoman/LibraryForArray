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
 * чтобы можно было сделать arrayLib.chain(arr).take(5).skip(3).map(function(x) {return x*5;}).value()+
 * но и чтобы можно было сделать и как раньше, типа arrayLib.take(arr, 5)-
 */

var arrayLibrary = {

    take: function (arrayInput,number) {

        if(arrayInput instanceof Array){

            return arrayInput.splice(0, number, arrayInput);
        }

        else {
            number = arrayInput;
            this.arrayInput = this.arrayInput.splice(0, number, this.arrayInput);

            return this;
        }
    },

    skip: function (arrayInput, number) {
        if(arrayInput instanceof Array){

            return arrayInput.splice(number, arrayInput.length, arrayInput);
        }

        else {
            number = arrayInput;
            this.arrayInput = this.arrayInput.splice(number, this.arrayInput.length, this.arrayInput);

            return this;
        }


    },

    map: function (arrayInput, callback) {
        var result = [];

        if (arrayInput instanceof Array) {
            for (var i = 0; i < arrayInput.length; i++) {
                if (callback(arrayInput[i])){
                    result.push(arrayInput[i]);
                }
            }
            return result;
        }
        else {
            callback = arrayInput;
            for (var i = 0; i < this.arrayInput.length; i++) {
                if (callback(this.arrayInput[i])) {
                    result.push(this.arrayInput[i]);
                }
            }
            this.arrayInput = result;

            return this;
        }
    },

    forEach: function (arrayInput, callback) {

        if (arrayInput instanceof Array) {
            for (var i = 0; i < arrayInput.length; i++) {
                callback(arrayInput[i]);
            }
        }
        else{
             callback = arrayInput;
             for (var i = 0; i < this.arrayInput.length; i++) {
                 callback(this.arrayInput[i]);
             }
             return this;
        }

    },

    filter: function (arrayInput, callback) {
        var result = [];

        if (arrayInput instanceof Array) {
            for (var i = 0; i < arrayInput.length; i++) {
                if (callback(arrayInput[i])) {
                    result.push(arrayInput[i]);
                }
            }
            return result;
        }
        else {
            callback = arrayInput;
            for (var i = 0; i < this.arrayInput.length; i++) {
                if (callback(this.arrayInput[i])) {
                    result.push(this.arrayInput[i]);
                }
            }
            this.arrayInput = result;

            return this;
        }
    },

    reduce: function (arrayInput, baseValue, callback) {
        var returnValue;
        if (arrayInput instanceof Array) {
            for (var i = 0; i < arrayInput.length; i++) {
                returnValue = callback(arrayInput[i], baseValue);
                baseValue = returnValue;
            }
            return returnValue;
        }
        else {
            callback = baseValue;
            baseValue = arrayInput;
            for (var i = 0; i < this.arrayInput.length; i++) {
                returnValue = callback(this.arrayInput[i], baseValue);
                baseValue = returnValue;
            }
            this.arrayInput = returnValue;

            return this;
        }
    },

    chain: function (arrayInput) {

        this.arrayInput = arrayInput;

        return this;
    },

    value: function () {

        console.log(this.arrayInput);

        return this;
    }

};




