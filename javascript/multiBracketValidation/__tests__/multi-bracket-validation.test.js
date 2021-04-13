'use strict';
const multiBracketValidation = require('../multi-bracket-validation.js');

describe("Test multi bracket validation check", () => {
    it("Should return true ", () => {
        expect(multiBracketValidation("()[[]]")).toBeTruthy();
    });
    it("Should return true ", () => {
        expect(multiBracketValidation("()[][))(")).toBeFalsy();
    });
    it("Edge case should retrun false ", () => {
        expect(multiBracketValidation("{{{}]")).toBeFalsy();
    });
});