import React, { useState, useEffect } from 'react'
import './App.css'
import Visualizer from './control/Visualizer'
import Navbar from './navbar/Navbar'
import { bubbleSort } from './algorithms/bubbleSort'
import { MergeSort } from './algorithms/MergeSort'
import { SelectionSort } from './algorithms/SelectionSort'
import { QuickSort } from './algorithms/QuickSort'
import { InsertionSort } from './algorithms/InsertionSort'
import { HeapSort } from './algorithms/HeapSort'
import SortingInfo from './SortingInfo/SortingInfo'

function App() {


  const [array, setArray] = useState([])
  const [userInputArr, setUserInputArr] = useState('')
  const [isSorting, setIsSorting] = useState(false)
  const [Speed, setSpeed] = useState(100)
  const [selectedSorting, setSelectedSorting] = useState('')

  useEffect(() => {
    const userInput = userInputArr.split(',')
    const filteredInput = userInput.filter(item => !isNaN(item) && Number.isInteger(parseFloat(item))).map(item => Number(item) <= 500 && Number(item))
    console.log(filteredInput);
    setArray([...filteredInput])

  }, [userInputArr])


  // function to generate random array of length 30
  const generate = () => {
    const newArr = Array.from({ length: 15 }, () =>
      Math.floor(Math.random() * 500)
    );
    setArray(newArr);
  };

  // function to handle sorting methods
  const handleSorting = (e) => {

    const sortingMethod = e.target.value
    setSelectedSorting(sortingMethod)
    setIsSorting(true)
    let animationArr = []
    switch (sortingMethod) {
      case "Bubble Sort":
        animationArr = bubbleSort(array)
        bubbleAnimation(animationArr)

        break;
      case "Merge Sort":
        animationArr = MergeSort(array)
        animateMergeSorting(animationArr)

        break;
      case "Selection Sort":
        animationArr = SelectionSort(array)
        animateSelectionSort(animationArr)
        break;

      case "Quick Sort":
        animationArr = QuickSort(array)
        animateQuickSort(animationArr)
        break;

      case "Insertion Sort":
        animationArr = InsertionSort(array)
        animateInsertionSort(animationArr)
        break;

      case "Heap Sort":
        animationArr = HeapSort(array)
        animateHeapSort(animationArr)
        break;

      default:
        break;
    }

  }

  // function for bubble sort animation
  function bubbleAnimation(animation) {
    const barEle = document.getElementsByClassName('bar')

    for (let i = 0; i < animation.length; i++) {
      let [barOneInd, barTwoInd, swap] = animation[i]
      let barOne = barEle[barOneInd]
      let barTwo = barEle[barTwoInd]

      setTimeout(() => {
        barOne.style.backgroundColor = swap ? "red" : "yellow"
        barTwo.style.backgroundColor = swap ? "red" : "yellow"

        //swapping the heights of the bar
        if (swap) {
          const tempHeight = barOne.style.height
          barOne.style.height = barTwo.style.height
          barTwo.style.height = tempHeight


          //swapping the content of the bar
          const content = barOne.innerText
          barOne.innerText = barTwo.innerText
          barTwo.innerText = content
        }

        setTimeout(() => {
          barOne.style.backgroundColor = 'blue'
          barTwo.style.backgroundColor = 'blue'
        }, Speed);

      }, i * Speed);
    }

    setTimeout(() => {
      for (let j = 0; j < barEle.length; j++) {
        setTimeout(() => {
          barEle[j].style.backgroundColor = 'green'
        }, j * Speed);

      }
    }, animation.length * Speed);
  }

  // function for reseting the data
  const reSet = () => {
    setArray([])
    setSelectedSorting('')
  }


  // function for animating merge sort 
  const animateMergeSorting = (animations) => {
    const bars = document.getElementsByClassName('bar')
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i]
        const barOne = bars[barOneIdx]
        const barTwo = bars[barTwoIdx]
        const color = i % 3 === 0 ? "yellow" : "blue"
        setTimeout(() => {
          barOne.style.backgroundColor = color
          barTwo.style.backgroundColor = color
        }, i * Speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOne = bars[barOneIdx];
          barOne.style.height = `${newHeight}px`
          barOne.innerHTML = newHeight
        }, i * Speed);
      }
    }
    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green"
        }, j * Speed);
        setIsSorting(false)
      }
    }, animations.length * Speed);
  }

  //function for animating selection sort
  const animateSelectionSort = (animations) => {
    const bars = document.getElementsByClassName("bar")
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = animations[i]
      const barOne = bars[barOneIdx]
      const barTwo = bars[barTwoIdx]
      setTimeout(() => {
        barOne.style.backgroundColor = swap ? "red" : "yellow"
        barTwo.style.backgroundColor = swap ? "red" : "yellow"
        if (swap) {
          const tempHeight = barOne.style.height
          barOne.style.height = barTwo.style.height
          barTwo.style.height = tempHeight
          const tempContent = barOne.innerHTML
          barOne.innerHTML = barTwo.innerHTML
          barTwo.innerHTML = tempContent
        }
        setTimeout(() => {
          barOne.style.backgroundColor = "blue"
          barTwo.style.backgroundColor = "blue"
        }, Speed);
      }, i * Speed);
    }
    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green"
        }, j * Speed);
      }
      setIsSorting(false)
    }, animations.length * Speed);
  }

  //function to animate Quick Sort
  const animateQuickSort = (animations) => {
    const bars = document.getElementsByClassName("bar");

    const animateStep = (i) => {
      if (i >= animations.length) {
        setIsSorting(false);
        return;
      }

      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const barOne = bars[barOneIdx];
      const barTwo = bars[barTwoIdx];

      setTimeout(() => {
        barOne.style.backgroundColor = swap ? "red" : "yellow";
        barTwo.style.backgroundColor = swap ? "red" : "yellow";

        if (swap) {
          const tempHeight = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = tempHeight;
          const tempContent = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = tempContent;
        }

        setTimeout(() => {
          barOne.style.backgroundColor = "blue";
          barTwo.style.backgroundColor = "blue";
        }, Speed);

        animateStep(i + 1);
      }, Speed);
      setTimeout(() => {
        for (let j = 0; j < bars.length; j++) {
          setTimeout(() => {
            bars[j].style.backgroundColor = "green"
          }, j * Speed);
        }
        setIsSorting(false)
      }, animations.length * Speed);
    };

    animateStep(0);
  };

  //function to animate Insertion Sort
  const animateInsertionSort = (animations) => {
    const bars = document.getElementsByClassName("bar");

    const animateStep = (i) => {
      if (i >= animations.length) {
        setIsSorting(false);
        return;
      }

      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const barOne = bars[barOneIdx];
      const barTwo = bars[barTwoIdx];

      setTimeout(() => {
        barOne.style.backgroundColor = swap ? "red" : "yellow";
        barTwo.style.backgroundColor = swap ? "red" : "yellow";

        if (swap) {
          const tempHeight = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = tempHeight;
          const tempContent = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = tempContent;
        }

        setTimeout(() => {
          barOne.style.backgroundColor = "blue";
          barTwo.style.backgroundColor = "blue";
        }, Speed);

        animateStep(i + 1);
      }, Speed);
      setTimeout(() => {
        for (let j = 0; j < bars.length; j++) {
          setTimeout(() => {
            bars[j].style.backgroundColor = "green"
          }, j * Speed);
        }
        setIsSorting(false)
      }, animations.length * Speed);
    };

    animateStep(0);
  };

  // function to animate Heap Sort
  const animateHeapSort = (animations) => {
    const bars = document.getElementsByClassName("bar");

    const animateStep = (i) => {
      if (i >= animations.length) {
        setIsSorting(false);
        return;
      }

      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const barOne = bars[barOneIdx];
      const barTwo = bars[barTwoIdx];

      setTimeout(() => {
        barOne.style.backgroundColor = swap ? "red" : "yellow";
        barTwo.style.backgroundColor = swap ? "red" : "yellow";

        if (swap) {
          const tempHeight = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = tempHeight;
          const tempContent = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = tempContent;
        }

        setTimeout(() => {
          barOne.style.backgroundColor = "blue";
          barTwo.style.backgroundColor = "blue";
        }, Speed);

        animateStep(i + 1);
      }, Speed);

      setTimeout(() => {
        for (let j = 0; j < bars.length; j++) {
          setTimeout(() => {
            bars[j].style.backgroundColor = "green"
          }, j * Speed);
        }
        setIsSorting(false)
      }, animations.length * Speed);
    };

    animateStep(0);
  };




  return (
    <>
      <Navbar generate={generate}
        handleSorting={handleSorting}
        userInputArr={userInputArr}
        setUserInputArr={setUserInputArr}
        setSpeed={setSpeed}
        reSet={reSet}
        isSorting={isSorting}
        Speed={Speed}
        selectedSorting={selectedSorting}

      />
      <SortingInfo selectedSorting={selectedSorting} />


      <Visualizer array={array} />
    </>
  )
}

export default App
