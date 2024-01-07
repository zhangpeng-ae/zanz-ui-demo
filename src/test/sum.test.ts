import { expect, test } from "vitest";
import { sum } from "./sum";

test("测试数字相加1", () => {
	expect(sum(1, 2)).toBe(3);
});
