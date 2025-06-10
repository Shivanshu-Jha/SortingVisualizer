export const InsertionSort = (array) => {
    const animations = [];
    const pseudoArray = array.slice();

    for (let i = 1; i < pseudoArray.length; i++) {
        let j = i;
        while (j > 0 && pseudoArray[j] < pseudoArray[j - 1]) {
            animations.push([j, j - 1, false]); // Highlight comparison
            swap(pseudoArray, j, j - 1);
            animations.push([j, j - 1, true]); // Highlight swap
            j--;
        }
    }

    return animations;
};

const swap = (array, idx1, idx2) => {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
};
