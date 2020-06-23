1. Go to the bomb index
2. Set the element there to be zero
3. Set the elements foward and backward of that element to zero
4. Set the set the elements up and down of that element to zero
5. Set the elements at the edge to zero


def groupSort(arr):
    def isUnqueFreqCount(arr):
        a = [arr.count(i) for i in set(arr)]
        if len(a) > len(set(a)):
            return False
        return True

    def getGroupSort(order):
        if (order == 'DESC'):
            descArr = list(set(arr))
            descArr.sort(reverse=True)
            return [[i, arr.count(i)] for i in descArr]
        return [[i, arr.count(i)] for i in sorted(list(set(arr)))]

    if isUnqueFreqCount(arr):
        return getGroupSort('DESC')
    return getGroupSort('ASC')

def groupSort(arr):
    def uniqueFreqAndCountArrFunc(theList):
        a = [theList.count(i) for i in set(theList)]
        if len(a) > len(set(a)):
            return {"value": False, "a": a}
        return {"value": True, "a": a}
    
    uniqueFreqAndCountArr = uniqueFreqAndCountArrFunc(arr)

    def getGroupSort(order):
        if (order == 'DESC'):
            descArr = list(set(arr))
            descArr.sort(reverse=True)
            return [[i, arr.count(i)] for i in descArr]
        return [[i, arr.count(i)] for i in sorted(list(set(arr)))]

    if uniqueFreqAndCountArr["value"]:
        return getGroupSort('DESC')
    return getGroupSort('ASC')
