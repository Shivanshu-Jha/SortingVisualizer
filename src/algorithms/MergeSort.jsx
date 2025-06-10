export const MergeSort = (array) => {
    const animations = []
    if (array.length <= 1) return animations

    const pseudoArr = array.slice()
    const sortedArray = array.slice()

    mergeSortHelper(sortedArray, 0, sortedArray.length - 1, pseudoArr, animations)
    return animations
}

const mergeSortHelper = (sortedArray, startIdx, endIdx, pseudoArr, animations) => {
    if (startIdx === endIdx) return

    const middleIdx = Math.floor((startIdx + endIdx) / 2)
    mergeSortHelper(pseudoArr, startIdx, middleIdx, sortedArray, animations)
    mergeSortHelper(pseudoArr, middleIdx + 1, endIdx, sortedArray, animations)

    doMerge(sortedArray, startIdx, middleIdx, endIdx, pseudoArr, animations)
}

const doMerge = (sortedArray, startIdx, middleIdx, endIdx, pseudoArr, animations) => {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j])
        //push two indices again to change their color back
        animations.push([i, j])

        if (pseudoArr[i] <= pseudoArr[j]) {
            animations.push([k, pseudoArr[i]])
            sortedArray[k++] = pseudoArr[i++]
        } else {
            animations.push([k, pseudoArr[j]])
            sortedArray[k++] = pseudoArr[j++]
        }

    }

    while (i <= middleIdx) {
        animations.push([i, i])
        animations.push([i, i])

        animations.push([k, pseudoArr[i]])
        sortedArray[k++] = pseudoArr[i++]
    }

    while (j <= endIdx) {
        animations.push([j, j])
        animations.push([j, j])

        animations.push([k, pseudoArr[j]])
        sortedArray[k++] = pseudoArr[j++]
    }
}