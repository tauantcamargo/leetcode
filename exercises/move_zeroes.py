from typing import List

def move_zeroes(list: List[int]) -> None:
  """
  Do not return anything, modify nums in-place instead.
  """
  for i in range(len(list)):
    if (list[i] == 0):
      list.remove(0)
      list.append(0)
  return list

