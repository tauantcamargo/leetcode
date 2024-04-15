describe("majorityElement", () => {
	function majorityElement(nums: number[]): number {
		let count = 1;
		let element = nums[0];
		let i = 1;

		while (i < nums.length) {
			if (nums[i] !== element) {
				count--;
			} else {
				count++;
			}

			if (count < 0) {
				element = nums[i];
				count = 0;
			}
			i++;
		}

		return element;
	}

	it("should return 5", () => {
		expect(majorityElement([6, 5, 5])).toStrictEqual(5);
	});
});
