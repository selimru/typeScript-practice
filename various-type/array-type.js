var numbers;
numbers = [1, 2, 3, 4, 5, 6];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var i = numbers_1[_i];
    console.log(i);
    console.log('index-2', numbers[2]);
}
var numbers2;
numbers2 = ['one', 'two', 'three', 'four'];
for (var _a = 0, numbers2_1 = numbers2; _a < numbers2_1.length; _a++) {
    var i = numbers2_1[_a];
    console.log(i);
    console.log('index-2', numbers2[2]);
}
// union type
var numbers3;
numbers3 = [1, 'one', 'two', 'three', 'four', 2, 6];
for (var _b = 0, numbers3_1 = numbers3; _b < numbers3_1.length; _b++) {
    var i = numbers3_1[_b];
    console.log(i);
    console.log('index-2', numbers3[5]);
}
