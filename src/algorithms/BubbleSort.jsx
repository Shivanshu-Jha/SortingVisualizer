export function bubbleSort(array) {
    let animation = []
    let tempArr = [...array]

    for (let i = 0; i < tempArr.length - 1; i++) {
        for (let j = 0; j < tempArr.length - 1; j++) {
            if (tempArr[j] > tempArr[j + 1]) {
                animation.push([j, j + 1, true])
                let pseudo = tempArr[j]
                tempArr[j] = tempArr[j + 1]
                tempArr[j + 1] = pseudo
            } else {
                animation.push([j, j + 1, false])
            }

        }
    }
    return animation

}