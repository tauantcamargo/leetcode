describe("applyOperations", () => {
	function applyOperations(nums: number[]): number[] {
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] === nums[i + 1]) {
				nums[i] *= 2;
				nums[i + 1] = 0;
			}
		}

		const numFiltered = nums.filter((num) => num > 0);

		for (const index in nums) {
			nums[index] = numFiltered[index] || 0;
		}

		return nums;
	}

	it("should return [1, 4, 2, 0, 0, 0,]", () => {
		expect(applyOperations([1, 2, 2, 1, 1, 0])).toStrictEqual([
			1, 4, 2, 0, 0, 0,
		]);
	});
});
