describe("getConcatenation", () => {
	function getConcatenation(nums: number[]): number[] {
		return nums.concat(nums);
	}

	it("should return [1,2,1,1,2,1]", () => {
		expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
	});
});
