import { hasASymbol } from "./hasASymbol";

test("hasASymbol identifies whether a string has a symbol", () => {
    expect(hasASymbol("hello!")).toBe(true);
    expect(hasASymbol("hello")).toBe(false);
    expect(hasASymbol("qwert£")).toBe(true);
})