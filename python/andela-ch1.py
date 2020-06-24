import copy

def groupSort(arr):
    def isUnqueFreqCount(arr):
        a = [arr.count(i) for i in set(arr)]
        if len(a) > len(set(a)):
            return False
        return True

    def getGroupSort(order):
        keyFreqPairs = [[arr.count(i), i] for i in sorted(list(set(arr)))]
        keyFreqPairsCopy = copy.deepcopy(keyFreqPairs)
        store = []

        for _ in range(len(keyFreqPairs)):
            minmaxFreqKey = max(keyFreqPairsCopy) if order == 'DESC' else min(keyFreqPairsCopy) 
            store.append(list(reversed(minmaxFreqKey)))
            keyFreqPairsCopy.remove(minmaxFreqKey)

        return store

    if isUnqueFreqCount(arr):
        return getGroupSort('DESC')
    return getGroupSort('ASC')


print(groupSort([8, 8, 8, 8, 3, 3, 3, 3, 3, 1, 2, 2, 0, 0, 0]))
print(groupSort([1, 1, 1, 1, 10, 10, 10, 5, 5, 6, 6]))
