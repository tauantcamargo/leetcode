package main

import (
	"fmt"

	"example.com/leetcode/arrays"
)

func main() {
	nums := []int{1,3,5,6}
	target := 2
	result := arrays.SearchInsert(nums, target)

	fmt.Println(result)
}