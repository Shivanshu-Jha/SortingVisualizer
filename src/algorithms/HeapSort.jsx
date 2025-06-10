export function HeapSort(array) {
    let animation = [];
    let tempArr = [...array];

    // Build the max heap
    for (let i = Math.floor(tempArr.length / 2) - 1; i >= 0; i--) {
        heapify(tempArr, tempArr.length, i, animation);
    }

    // Extract elements from the heap one by one
    for (let i = tempArr.length - 1; i > 0; i--) {
        animation.push([0, i, true]);
        let pseudo = tempArr[0];
        tempArr[0] = tempArr[i];
        tempArr[i] = pseudo;

        // Heapify the root element to maintain max heap property
        heapify(tempArr, i, 0, animation);
    }

    return animation;
}

const heapify = (array, size, rootIdx, animation) => {
    let largest = rootIdx;
    let left = 2 * rootIdx + 1;
    let right = 2 * rootIdx + 2;

    if (left < size && array[left] > array[largest]) {
        largest = left;
    }

    if (right < size && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== rootIdx) {
        animation.push([rootIdx, largest, true]);
        let pseudo = array[rootIdx];
        array[rootIdx] = array[largest];
        array[largest] = pseudo;

        heapify(array, size, largest, animation);
    }
};
