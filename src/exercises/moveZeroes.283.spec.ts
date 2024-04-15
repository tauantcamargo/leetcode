describe("moveZeroes", () => {
	function moveZeroes(numArr: number[]): number[] {
		const numFiltered = [...numArr].filter((num) => num > 0);

		for (const index in numArr) {
			numArr[index] = numFiltered[index] || 0;
		}

		return numArr;
	}
	it("should return [1, 3, 12, 0, 0]", () => {
		expect(moveZeroes([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0]);
	});
});
