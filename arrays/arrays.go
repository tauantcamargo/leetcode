package arrays

func SearchInsert(nums []int, target int) int {
	i := 0

	for ; i < len(nums); i++ {
		if nums[i] == target {
			return i
		} else if nums[i] > target {
			return i
		}
	}
	return i
}