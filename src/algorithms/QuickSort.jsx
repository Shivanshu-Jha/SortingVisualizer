
export const QuickSort = (array) => {
    const animations = [];
    const pseudoArray = array.slice();
    quickSortHelper(pseudoArray, 0, pseudoArray.length - 1, animations);
    return animations;
};

const quickSortHelper = (array, startIdx, endIdx, animations) => {
    if (startIdx >= endIdx) return;
    const pivotIdx = partition(array, startIdx, endIdx, animations);
    quickSortHelper(array, startIdx, pivotIdx - 1, animations);
    quickSortHelper(array, pivotIdx + 1, endIdx, animations);
};

const partition = (array, startIdx, endIdx, animations) => {
    const pivotValue = array[endIdx];
    let pivotIdx = startIdx;
    for (let i = startIdx; i < endIdx; i++) {
        animations.push([i, endIdx, false]);
        if (array[i] < pivotValue) {
            animations.push([i, pivotIdx, true]);
            swap(array, i, pivotIdx);
            pivotIdx++;
        }
    }
    animations.push([pivotIdx, endIdx, true]);
    swap(array, pivotIdx, endIdx);
    return pivotIdx;
};

const swap = (array, idx1, idx2) => {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
};
