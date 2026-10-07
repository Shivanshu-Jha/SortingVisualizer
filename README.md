# Sorting Visualizer 📊

An interactive web app that lets you **watch sorting algorithms run in real time** and compare how they work. Built with React and Tailwind CSS.

**🌐 Live Demo:**  [sorting-visualizer](https://sorting-visualizer-zib2.vercel.app)

---

## ✨ Features

- 🎬 **Real-time visualization** of sorting with animated bars
- 🔢 **Six algorithms:** Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort and Heap Sort
- 🎛️ **Controls** to generate a new array and run the selected algorithm <!-- add: speed / array size controls if you have them -->
- 📚 **Algorithm info panel** explaining each algorithm and its complexity
- 📱 **Responsive, intuitive UI** built with Tailwind CSS
- ⚡ **Smooth animations** optimized for rendering performance

---

## 🛠️ Tech Stack

| Technology | Usage |
| --- | --- |
| React | UI and state management |
| Vite | Build tool and dev server |
| Tailwind CSS | Styling and responsive design |
| JavaScript (ES6+) | Algorithm implementations |

---

## 📊 Algorithm Complexity

| Algorithm | Best | Average | Worst | Space | Stable |
| --- | --- | --- | --- | --- | --- |
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |

---

## 🧠 How It Works

1. An array of random values is generated and rendered as bars.
2. The user selects an algorithm and starts the sort.
3. The algorithm updates the array step by step, with a small delay between steps.
4. Each update changes React state, so the bars re-render and highlight the elements being compared or swapped.

Each algorithm lives in its own file in `src/algorithms/`, so adding a new one only needs a new file and a way to select it.

---

## 📁 Project Structure

```
SortingVisualizer/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                 # Entry point
    ├── App.jsx                  # Root component
    ├── App.css / index.css      # Styles
    ├── algorithms/              # One file per algorithm
    │   ├── BubbleSort.jsx
    │   ├── SelectionSort.jsx
    │   ├── InsertionSort.jsx
    │   ├── MergeSort.jsx
    │   ├── QuickSort.jsx
    │   └── HeapSort.jsx
    ├── control/
    │   └── Visualizer.jsx       # Array display, controls and animation logic
    ├── navbar/
    │   └── Navbar.jsx           # Navigation and algorithm selection
    └── SortingInfo/
        └── SortingInfo.jsx      # Algorithm explanations
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+

### Installation

```bash
git clone https://github.com/Shivanshu-Jha/SortingVisualizer.git
cd SortingVisualizer
npm install
npm run dev
```


### Build for production

```bash
npm run build
```

