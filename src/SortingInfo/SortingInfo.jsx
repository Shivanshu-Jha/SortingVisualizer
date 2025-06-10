const SortingInfo = ({ selectedSorting }) => {
    const sortingDetails = {
        "Bubble Sort": {
            title: "Bubble Sort 🫧",
            description:
                "Repeatedly compares adjacent elements and swaps them if needed. Simple but inefficient for large datasets.",
            complexity: "O(n²)",
            bestFor: "Small datasets, easy implementation",
            drawback: "Slow for large datasets"
        },
        "Selection Sort": {
            title: "Selection Sort 🔍",
            description:
                "Finds the smallest element and swaps it with the first unsorted element. Minimal swaps but slow for large lists.",
            complexity: "O(n²)",
            bestFor: "Teaching sorting concepts, fewer swaps",
            drawback: "Inefficient compared to advanced sorting methods"
        },
        "Insertion Sort": {
            title: "Insertion Sort 📌",
            description:
                "Builds the sorted array one element at a time by inserting elements into their correct positions.",
            complexity: "O(n²), O(n) for nearly sorted data",
            bestFor: "Small datasets, nearly sorted lists",
            drawback: "Not efficient for large datasets"
        },
        "Merge Sort": {
            title: "Merge Sort 🧩",
            description:
                "Divides the array into smaller parts, sorts them individually, and merges back.",
            complexity: "O(n log n)",
            bestFor: "Large datasets, stable sorting",
            drawback: "Requires extra memory"
        },
        "Quick Sort": {
            title: "Quick Sort ⚡",
            description:
                "Uses a pivot to partition elements, sorting recursively for fast performance.",
            complexity: "O(n log n), worst case O(n²)",
            bestFor: "Fast sorting, widely used in practice",
            drawback: "Unstable in default implementations"
        },
        "Heap Sort": {
            title: "Heap Sort 🏗️",
            description:
                "Builds a max heap and extracts elements in sorted order.",
            complexity: "O(n log n)",
            bestFor: "Efficient priority queue operations",
            drawback: "Slightly slower than Quick Sort"
        }
    };

    return (
        <div className="sorting-info">
            {selectedSorting && sortingDetails[selectedSorting] ? (
                
                <div className="info-card pt-10 pl-4">
                    
                    <h3 className="font-bold underline">{sortingDetails[selectedSorting].title}</h3>
                    <p><strong>Description:</strong> {sortingDetails[selectedSorting].description}</p>
                    <p><strong>Time Complexity:</strong> {sortingDetails[selectedSorting].complexity}</p>
                    <p><strong>Best For:</strong> {sortingDetails[selectedSorting].bestFor}</p>
                    <p><strong>Drawback:</strong> {sortingDetails[selectedSorting].drawback}</p>
                    <hr className="w-[50rem]" />
                </div>
            ) : (
                <p className="text-xs pt-10">Select a sorting method to see details.</p>
            )}
        </div>
    );
};


export default SortingInfo