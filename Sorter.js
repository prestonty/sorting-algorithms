class Sorter {
    constructor(numElements) {
        // sorter does not have much
        // should have comparators not here though
        this.numElements = numElements;
    }

    print(items) {
        for(let i = 0; i < items.length; i++) {
            console.log(items[i]);
        }
    }

    populate(items) {
        for(let i = 0; i < items.length; i++) {
            items[i] = i+1;
        }
    }

    fisherShuffle(items) {
        const randItems = new Array(items.length);
        // we cannot use items.length in for loop as we wil be manipulating its length by removing elements from array
        const repetitions = items.length;

        for(let i = 0; i < repetitions; i++) {
            let lastIndex = repetitions-1-i;
            // the second parameter of parseInt() is radix which just specifies the number System. e.g. for hexadecimal, rounding would be hafl way between the 16 symbols. instead of 5 for base 10. default radix value is 10 btw so its pointless
            let randIndex = parseInt(Math.random()*(lastIndex), 10);
            randItems[i] = items[randIndex];
            // console.log("INDEX " + randIndex);

            // since we can only remove an element using pop(), gotta swap element with last to pop
            // since we removing, dont really care about its value, just copy last elements value onto this then pop
            items[randIndex] = items[items.length - 1];
            items.pop();
        }
        return randItems;
    }

    isSorted(items) {
        for(let i = 0; i < items.length-1; i++) {
            if(items[i] > items[i+1])
                return false;
        }
        return true;
    }

    // no need to write function as these are methods. Functions are static methods I think, methods are for objects
    selectionSort(items) {
        let homeIndex = 0;
        let smallIndex = 0;
        let current = items[homeIndex];
        do {
            let smallest = items[homeIndex];
            for(let i = homeIndex; i < items.length; i++) {
                current = items[i];
                if(current <= smallest) {
                    smallest = current;
                    smallIndex = i;
                }
            }
            // found smallest, now swap with home index
            let temp = items[homeIndex];
            items[homeIndex] = smallest;
            items[smallIndex] = temp;
            homeIndex++;
        } while(!this.isSorted(items));
        // no need to return array
    }

    bubbleSort(items) {
        do {
            for(let i = 0; i < items.length; i++) {
                if(items[i] > items[i+1]) {
                    // swapped
                    let temp = items[i];
                    items[i] = items[i+1];
                    items[i+1] = temp;
                }
            }
        } while(!this.isSorted(items));
    }

    mergeSort(items) {
        // BREAK ARRAY INTO ELEMENTS
        if(items.length > 1) {
            // these are temporary arrays
            const firstHalf = new Array(Math.trunc(items.length/2));
            // console.log(items.length);
            for(let i = 0; i < items.length/2; i++) {
                firstHalf[i] = items[i];
            }
            
            // becareful, debug later
            const secondHalf = new Array(items.length - Math.trunc(items.length/2));
            
            for(let i = items.length/2+1; i < items.length; i++) {
                secondHalf[i] = items[i];
            }
            this.merge(this.mergeSort(firstHalf), this.mergeSort(secondHalf));
        }
        return items;
        
        
        

        // merge left with right (sort again)

    }

    merge(firstHalf, secondHalf) {
        const sortedArray = new Array(firstHalf.length + secondHalf.length);
        let hf; // first half head
        let hs; // second half head
        for(let i = 0; i < sortedArray.length; i++) {
            if(hf < firstHalf.length && hs >= secondHalf.length) {
                sortedArray[i] = firstHalf[hf];
                hf++;
            } else if(hf >= firstHalf.length && hs < secondHalf.length) {
                sortedArray[i] = secondHalf[hs];
                hs++;
            } else if(firstHalf[hf] >= secondHalf[hs]) {
                sortedArray[i] = firstHalf[hf];
            } else if(firstHalf[hf] < secondHalf[hs]) {
                sortedArray[i] = secondHalf[hs];
            }
        }
        return sortedArray;
    }

    bogoSort() {

    }

    /* future ones
     * radix
     * quick sort
     * swap sort (something like that)
     * 
     * u gotta make ur own
     * kyleSort
     * short description:
     * data management
     * 
     * Sample method - systematic cluster
     * we pick out any outliers in a sample space
     * outliers are considered things with a 5% standard deviation
     * 
     * since we know at index 0, height should be 10, and at index 5 height should be 60, 
     * no i want to compare relative to one another
     * 
     */
}


// // in the future, put this in a separate file or something, main method material

// // fun fact, no such think as reference type in javascript, only runtime object types
// // use const for objects as their address is constant
const size = 20;
var items = new Array(size);
const sorter = new Sorter(size);

// console.log("POPULATE WITH DATA");
sorter.populate(items);
// sorter.print(items);

console.log("______________\n");
console.log("SHUFFLE DATA");
shuffled = sorter.fisherShuffle(items);
sorter.print(shuffled);

console.log("______________\n");
console.log("SELECTION SORT");
sorter.selectionSort(shuffled);
sorter.print(shuffled);

// why do i have to do this each time
var items = new Array(size);
sorter.populate(items);

console.log("______________\n");
console.log("SHUFFLE DATA");
shuffled = sorter.fisherShuffle(items);
sorter.print(shuffled);

console.log("______________\n");
console.log("Bubble SORT");
sorter.bubbleSort(shuffled);
sorter.print(shuffled);




var items = new Array(size);
sorter.populate(items);

console.log("______________\n");
console.log("SHUFFLE DATA");
shuffled = sorter.fisherShuffle(items);
sorter.print(shuffled);

console.log("______________\n");
console.log("MERGE SORT");
sorter.mergeSort(shuffled);
sorter.print(shuffled);
