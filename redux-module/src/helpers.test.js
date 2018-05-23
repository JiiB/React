import { addNumbers, sayHello } from "./helpers";

test("adds 1 + 2 to equal 3", () => {
  expect(addNumbers(1, 2)).toBe(3);
});

test("adds 2.5 as string + 2 to equal 4.5", () => {
  expect(addNumbers("2.5", 2)).toBe(4.5);
});

test("adds 999 + 1 to not equal 1001", () => {
  expect(addNumbers(999, 1)).not.toBe(4.5);
});

test("adds undefined + 1 to equal NaN", () => {
  expect(addNumbers(1)).toBeFalsy();
});

test("add more than 2 numbers, 1 + 2 + 5 to egual 3", () => {
  expect(addNumbers(1, 2, 5)).toBe(3);
});

test("string should contain hello my name is nino", () => {
  expect(sayHello("nino")).toContain("Hello my name is nino");
});

test("string should contain hello my name is undefined", () => {
  expect(sayHello()).toContain("Hello my name is undefined");
});

test("sayHello is defined", () => {
  expect(sayHello()).toBeDefined();
});
