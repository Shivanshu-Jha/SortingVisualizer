
export const SelectionSort = (array) => {
    const animations = [];
    const pseudoArray = array.slice();
    for (let i = 0; i < pseudoArray.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < pseudoArray.length; j++) {
            animations.push([i, j, false]);
            if (pseudoArray[j] < pseudoArray[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            animations.push([i, minIdx, true]);
            swap(pseudoArray, i, minIdx);
        }
    }
    return animations;
};
const swap = (array, idx1, idx2) => {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
};