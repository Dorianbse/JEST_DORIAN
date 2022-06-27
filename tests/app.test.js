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

describe("Scénario 3 Date", () => {
    it("Date 1 is superior to Date 2", () => {
        expect(app.dateIsSuperior("17/02/2001", "17/02/1999")).toEqual(1);
    });

    it("Date 1 is NOT superior to Date 2", () => {
        expect(app.dateIsSuperior("17/02/1999", "17/02/2001")).toEqual(-1);
    });
});

describe("Scénario 4 Date is valid", () => {
    it("Date is valid", () => {
        expect(app.dateIsValid("17/02/2001")).toEqual(true);
    });

    it("Date is NOT valid", () => {
        expect(app.dateIsValid("17/26/1999")).toEqual(false);
    });
});
