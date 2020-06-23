def groupSort(arr):
    def isUnqueFreqCount(arr):
        a = [arr.count(i) for i in set(arr)]
        if len(a) > len(set(a)):
            return False
        return True

    def getGroupSort(order):
        if (order == 'DESC'):
            descArr=list(set(arr))
            descArr.sort(reverse=True)
            return [[i, arr.count(i)] for i in descArr]
        return [[i, arr.count(i)] for i in sorted(list(set(arr)))]

    if isUnqueFreqCount(arr):
        return getGroupSort('DESC')
    return getGroupSort('ASC')


print(groupSort([7, 12, 3]))