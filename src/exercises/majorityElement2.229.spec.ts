describe("majorityElement II", () => {
	function majorityElement(nums: number[]): number[] {
		const map = new Map();
		const answer = [];
		const treshold = nums.length / 3;

		for (let i = 0; i < nums.length; i++) {
			map.set(nums[i], (map.get(nums[i]) || 0) + 1);
		}

		for (const [key, value] of map.entries()) {
			if (value > treshold) {
				answer.push(key);
			}
		}

		return answer;
	}
	it("should return [3, 2]", () => {
		expect(majorityElement([3, 3, 2, 3, 2, 2])).toStrictEqual([3, 2]);
	});
});
