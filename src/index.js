var keys = require("@nathanfaucett/keys"),
    isUndefined = require("@nathanfaucett/is_undefined");


module.exports = objectReduce;


function objectReduce(object, callback, initialValue) {
    var objectKeys = keys(object),
        il = objectKeys.length - 1,
        value = initialValue,
        i, key;

    if (isUndefined(value)) {
        i = 0;
        value = object[objectKeys[i]];
    } else {
        i = -1;
    }

    while (i++ < il) {
        key = objectKeys[i];
        value = callback(value, object[key], key, object);
    }

    return value;
}
