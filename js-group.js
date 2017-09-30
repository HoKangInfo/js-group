"use strict";

var isNumber = (value) => (typeof value == 'number' ||
    (Object.prototype.toString.call(value) == '[object Number]'));

var isInteger = (value) => (isNumber(value) && value % 1 == 0);

var isLength = (value) => (isNumber(value) &&
    value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER);

var isString = (value) => (typeof value == 'string') ||
    (Object.prototype.toString.call(value) == '[object String]');

var isArray = Array.isArray;


module.exports = {
    "isNumber": isNumber,
    "isInteger": isInteger,
    "isLength": isLength,
    "isString": isString,
    "isArray": isArray,
};