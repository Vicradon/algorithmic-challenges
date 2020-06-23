def groupSort(arr):
    def isUnqueFreqCount(arr):
        a = [arr.count(i) for i in set(arr)]
        if len(a) > len(set(a)):
            return False
        return True

    def getGroupSort(order):
        keyFreqPairs = [[i, arr.count(i)] for i in sorted(list(set(arr)))]
        if (order == 'DESC'):
            store = []
            for _ in range(len(keyFreqPairs)):
                maxCount = 0
                currentValue = 0
                for j in keyFreqPairs:
                    if j[1] > maxCount:
                        maxCount = j[1]
                        currentValue = j
                keyFreqPairs.remove(currentValue)
                store.append(currentValue)
            return store
        return keyFreqPairs

    if isUnqueFreqCount(arr):
        return getGroupSort('DESC')
    return getGroupSort('ASC')


a = [
    100,
    13,
    1,
    6, 5, 15,
    14,
    18,
    2, 9, 1, 5, 11,
    1, 4, 13,
    11,
    5, 12,
    17,
    1, 17,
    14,
    7, 4, 20,
    7, 2, 2, 17,
    13,
    17,
    15,
    11,
    20,
    8, 12,
    17,
    13,
    18,
    12,
    15,
    1, 5, 6, 2, 5, 3, 6, 13,
    8, 8, 5, 6, 19,
    13,
    13,
    4, 15,
    4, 8, 20,
    13,
    12,
    14,
    17,
    16,
    5, 1, 7, 6, 5, 19,
    18,
    7, 14,
    8, 19,
    10,
    6, 5, 12,
    6, 12,
    18,
    8, 5, 20,
    11,
    2, 1, 3, 13,
    16,
    9, 2, 8, 20,
    11,
    20,
    18
]
print(groupSort(a))
print(groupSort([1, 1, 1, 1, 10, 10, 10, 5, 5, 6]))
