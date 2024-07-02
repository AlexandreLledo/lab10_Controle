const myApp = require("../src/app");
describe('Test palindrome string', () => {

    beforeAll(() => {
        console.log("Before log palindrome");
    });

    afterAll(() => {
        console.log("After log palindrome");
    });

    describe('Palindrome TRUE', () => {

        test('If the string "a" is a palindrome', () => {
            let string = "a";
            expect(true).toBe(myApp.isPalindrome(string));
        });

        test('If the string "aaaa" is a palindrome', () => {
            let string = "aaaa";
            expect(true).toBe(myApp.isPalindrome(string));
        });

        test('If the string "laval" is a palindrome', () => {
            let string = "laval";
            expect(true).toBe(myApp.isPalindrome(string));
        });

        test('If the string "racecar" is a palindrome', () => {
            let string = "racecar";
            expect(true).toBe(myApp.isPalindrome(string));
        });
    });

    describe('Palindrome FALSE', () => {

        test('If the string "ab" is NOT a palindrome', () => {
            let string = "ab";
            expect(false).toBe(myApp.isPalindrome(string));
        });

        test('If the string "launchcode" is NOT a palindrome', () => {
            let string = "launchcode";
            expect(false).toBe(myApp.isPalindrome(string));
        });

        test('If the string "abA" is NOT a palindrome', () => {
            let string = "abA";
            expect(false).toBe(myApp.isPalindrome(string));
        });

        test('If the string "so many dynamos" is NOT a palindrome', () => {
            let string = "so many dynamos";
            expect(false).toBe(myApp.isPalindrome(string));
        });

    });

})