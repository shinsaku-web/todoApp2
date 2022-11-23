import { sum } from "./sum";

describe("Calculate", () => {
    test("sum", () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(3, 3)).toBe(5);
    });
});