from functools import reduce

def pairwise(arr, arg):
  'Description: Return the sum of the indexes of the pairs which add up to arg. If duplicate pairs exist, return the sum of those with lowest index.'
  store = []
  for i in arr:
    for j in range(arr.index(i)+1, len(arr)):
      if (i + arr[j] == arg):
        if ([i, arr[j], arr.index(i)+j] not in store):
          store.append([i, arr[j], arr.index(i)+j])
        else:
          arr.remove(i)
          store.append([i, arr[j-1], arr.index(i)+j+1])
  
  for i in store:
    for j in range(store.index(i)+1, len(store)):
      if i[0] == store[j][0] and i[1] == store[j][1]:
        if (i[2] < store[j][2]):
          store.remove(store[j])
        else:
          store.remove(i)

  finalStore = []
  for i in store:
    finalStore.append(i[2])

  return reduce(lambda a, b: a + b, finalStore)


print(pairwise([1, 4, 2, 3, 0, 5], 7))
print(pairwise([7, 9, 11, 13, 15], 20))
print(pairwise([1, 1, 2], 3))
print(pairwise([1, 8, 9, 1, 5, 2], 3))