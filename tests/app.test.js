const app = require("../app.js");

describe("Scénario 1 Palindrom", () => {
    it("should be a palindrom", () => {
        expect(app.isPalindrom("radar")).toEqual(true);
    });

    it("should NOT be a palindrom", () => {
        expect(app.isPalindrom("azerty")).toEqual(false);
    });
});

describe("Scénario 2 Modération", () => {
    it("contains forbidden words", () => {
        expect(app.containsForbiddenWords("clavier")).toEqual(true);
    });

    it("NOT contain forbidden words", () => {
        expect(app.containsForbiddenWords("Bonjour")).toEqual(false);
    });
});