import { format } from "../../Utils/currencyformatter.js"

describe("TEST SUITE: Format currency", () => {        //naming/creating the test suite
    it("Converts cents to dollars", () => {           //naming/creating our test
        expect(format(2005)).toEqual('20.05');
    });

    it("Rounding off to nearest decimal", () => {
        expect(format(207.5)).toEqual('2.08')
    });

    it("Rounding off to nearest decimal", () => {
        expect(format(2000.5)).toEqual('20.01')
    });

    it("Dealing with zero", () => {
        expect(format(0)).toEqual('0.00')
    });
});

describe("TEST SUITE: Testing random values", () => {
    describe("Testing letters and characters", () => {
        it("Passing a letter", () => {
            expect(format('a')).toEqual('NaN');
        });
        it("Passing a character", () => {
            expect(format('-')).toEqual('NaN');
        });
    });
    describe("Testing very long numbers", () => {
        it("Passing a 10digit number", () => {
            expect(format(124567890)).toEqual('1245678.90');
        })
    })
});