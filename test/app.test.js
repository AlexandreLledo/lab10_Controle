const myApp = require('../src/app');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

beforeAll(() => {
    console.log("Before log Test");
});

afterAll(() => {
    console.log("After log Test");
});

test('adds 2 integer and the result is valid', () => {
    let number1 = getRandomInt(100);
    let number2 = getRandomInt(100);
    let total = myApp.sum(number1, number2);

    expect(total).toBe(number1 + number2);
});




