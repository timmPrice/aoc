// ====================================================
//            Advent of Code: 2024 day 1
//  Quick Sort is overkill but I need the algo practice
//      This would have been quite easy in NumPy
// ====================================================

async function setup() {
}   

function quickSort(aList: number[], left: number = 0, right: number = aList.length - 1, stopOn: number = 10): number[] {
    // Base case: empty or single-element array
    if (left >= right) {
        return aList;
    }
    
    // For small subarrays, use insertion sort instead
    if (right - left + 1 <= stopOn) {
        insertionSort(aList, left, right);
        return aList;
    }
    
    // Use median-of-three for pivot selection
    const pivot = medianThree(aList, left, right);
    
    // Partition the array
    let i = left;
    let j = right;
    
    while (i < j) {
        // Find element on left that should be on right
        while (aList[i] < pivot && i < right) i++;
        
        // Find element on right that should be on left
        while (aList[j] > pivot && j > left) j--;
        
        // If we found two elements to swap
        if (i <= j) {
            swap(aList, i, j);
            i++;
            j--;
        }
    }
    
    // Recursively sort the partitions
    if (left < j) quickSort(aList, left, j, stopOn);
    if (i < right) quickSort(aList, i, right, stopOn);
    
    return aList;
}

// Insertion sort just for the subarray from left to right
function insertionSort(aList: number[], left: number, right: number): void {
    for (let i = left + 1; i <= right; i++) {
        const key = aList[i];
        let j = i - 1;
        
        while (j >= left && aList[j] > key) {
            aList[j + 1] = aList[j];
            j--;
        }
        
        aList[j + 1] = key;
    }
}

function medianThree (aList:number[], left:number, right:number): number{
    let center:number = Math.floor((left + right) / 2);
    if (aList[center] < aList[left]) {
        swap(aList, left, center);
    }
    if (aList[right] < aList[left]) {
        swap(aList, left, right);
    }
    if (aList[right] < aList[center]) {
        swap(aList, center, right);
    }

    return aList[right];
}

function swap (aList:number[], lhs:number, rhs:number): void {
    let temp:number = aList[lhs];
    aList[lhs] = aList[rhs];
    aList[rhs] = temp; 
}

function insertionSort (aList:number[]): number[] {
    let count:number = 0;
    var tmp:number;
    var hole: number;

    for (var bar:number = 1; bar < aList.length; bar++){
        tmp = aList[bar]
        for (hole = bar; hole > 0 && tmp < aList[hole - 1]; hole--){
            count++;
            aList[hole] = aList[hole - 1];
        }
        aList[hole] = tmp;
    }
    return aList; 
}

function totalDistance (one:number[], two:number[]): number {
    if (one.length !== two.length){
        return 0;
    }

    var result:number = 0; 
    for (var i = 0; i < one.length; i++){
        result += Math.abs(one[i] - two[i]);
    }
    return result
}

function listSimilarity (aNum:number, aList:number[]): number {
    var count:number = 0;
    // I could use a better search here... BS could work good because they are already sorted 
    for (var i = 0; i < aList.length; i++) { 
        if (aNum === aList[i]){
            count++;
        }     
    }

    return count;
}

function similarityScore(left:number[], right:number[]): number {
    let score:number = 0;
    for (var i = 0; i < left.length; i++){
        var count:number = listSimilarity(left[i], right);
        score += left[i] * count; 
    } 
    return score;
}

async function main(): void {
    const file = Bun.file("./input.txt");
    let input:string = await file.text();
    let buffer:string[] = input.split("\n");

    var left:number[] = [];
    var right:number[] = [];

    for (let i:int = 0; i < buffer.length - 1; i++) {
        let parts:string = buffer[i];
        let array = parts.split("   ");
        left.push(Number(array[0]));
        right.push(Number(array[1]));
    }
    
    left = quickSort(left, 0, left.length - 1, 3);
    right = quickSort(right, 0, right.length - 1 , 3);
    
    // PART ONE
    
    let total:number = totalDistance(left, right) 
    console.log("~ == PART 1 SOLUTION == ~")
    console.log("total distance: ", total, "\n");

    // PART TWO

    let score:number = similarityScore(left, right);
    console.log("~ == PART 2 SOLUTION == ~")
    console.log("similarity score: ", score, "\n");
}

main();
