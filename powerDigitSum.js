var strResult = '<br />First, the sum of the digits of 2^1000 is: ';

var start = '2';
var arrProduct = [];
var accum = 0
var sum = '';
var finalSum = 0;

function emptyArray(work) { while (work.length > 0) work.pop(); }

function sumOfTheNthDigit(value, arr) { arr.forEach(function(v) { accum += +v[value]; }); }

function sumOfTheDigits(value) { for (var x = -1; ++x < value.length;) finalSum += +value.charAt(x); }

for (var x = 1; ++x < 1001;) {
    emptyArray(arrProduct);
    arrProduct.push(start);
    arrProduct.push(start);
    for (var l = start.length; --l > -1;) {
        sumOfTheNthDigit(l, arrProduct);
        sum = (accum % 10).toString() + sum;
        accum = Math.floor(accum / 10);
    }
    if (accum > 0) start = accum.toString() + sum;
    else start = sum;
    sum = '';
    accum = 0;
}
sumOfTheDigits(start);

strResult += finalSum;
