// in the future, put this in a separate file or something, main method material

// fun fact, no such think as reference type in javascript, only runtime object types
// use const for objects as their address is constant
const size = 20;
var items = new Array(size);
const sorter = new Sorter(size);

// console.log("POPULATE WITH DATA");
sorter.populate(items);
// sorter.print(items);
// console.log("______________\n");

console.log("SHUFFLE DATA");
shuffled = sorter.fisherShuffle(items);
sorter.print(shuffled);

// console.log("______________\n");
// console.log("SELECTION SORT");
// sorter.selectionSort(shuffled);
// sorter.print(shuffled);

console.log("______________\n");
console.log("Bubble SORT");
sorter.bubbleSort(shuffled);
sorter.print(shuffled);