// old solution
// export function moveZeroes(nums: number[]): void {
// 	const zeroList: number[] = [];
// 	const numList: number[] = [];
// 	for (const num of nums) {
// 		if (num === 0) {
// 			zeroList.push(num);
// 		} else {
// 			numList.push(num);
// 		}
// 	}
//   nums.length = 0;
//   nums.push(...numList, ...zeroList);
// }

// Improved solution
describe("test", () => {
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
