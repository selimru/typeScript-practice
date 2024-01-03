let numbers: number[]
numbers = [1, 2, 3, 4, 5, 6]

for (let i of numbers) {
    console.log(i);
    console.log('index-2', numbers[2]);


}

let numbers2: string[]
numbers2 = ['one', 'two', 'three', 'four'];

for (let i of numbers2) {
    console.log(i);
    console.log('index-2', numbers2[2]);


}

// union type

let numbers3: (string | number)[];
numbers3 = [1, 'one', 'two', 'three', 'four', 2, 6];

for (let i of numbers3) {
    console.log(i);
    console.log('index-2', numbers3[5]);


}