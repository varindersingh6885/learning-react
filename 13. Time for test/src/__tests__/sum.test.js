import { sum } from "../utils/sum";

test("Sum function to caluculation sum of two numbers", () => {
  const result = sum(5, 3);

  expect(result).toBe(8);
});
