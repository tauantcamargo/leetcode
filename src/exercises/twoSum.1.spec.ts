describe("twoSum", () => {
	function twoSum(numArr: number[], target: number): number[] {
		const numberMap = new Map();

		for (let i = 0; i < numArr.length; i++) {
			const num = numArr[i];
			const diff = target - num;

			if (numberMap.has(diff)) {
				return [numberMap.get(diff), i];
			}

			numberMap.set(num, i);
		}

		return [...numberMap.values()];
	}

	it("should return [1, 3, 12, 0, 0]", () => {
		expect(twoSum([0, 1, 0, 3, 12], 4)).toStrictEqual([1, 3]);
	});
});
