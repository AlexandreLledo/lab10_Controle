const myApp = require("../src/app");

describe('Device test', () => {

    beforeAll(() => {
        console.log("Before log device");
    });

    afterAll(() => {
        console.log("After log device");
    });

test('Euro to dollar', () => {
    let money = 100;
    let valueDollar = myApp.fromEuroToDollar(money);
    expect(valueDollar).toEqual(120);
});

test("Euro to japanYen", () =>{
    let money = 100;
    let valueYen = myApp.fromEuroToJapanYen(money);
    expect(valueYen).toEqual(12790);
});

test("Euro to british", () =>{
    let money = 100;
    let valuePound = myApp.fromEuroToBritish(money);
    expect(valuePound).toEqual(80);
})
});