// ========================================
//      Advent of Code \ 2024 Day 2
//  why am I enjoying typescript so much?
// ========================================

function checkIncreasing(aList: number[]): boolean {
    for (let i = 0; i < (aList.length - 1); i++) {
        if (aList[i] < aList[i + 1] && Math.abs(aList[i] - aList[i + 1]) <= 3) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}

function checkDecreasing(aList: number[]): boolean {
    for (let i = 0; i < (aList.length - 1); i++) {
        if (aList[i] > aList[i + 1] && Math.abs(aList[i] - aList[i + 1]) <= 3) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}

function readRow(aList: string[]): number {
    let count = 0;
    for (let i = 0; i < aList.length; i++) {
        let numbers: number[] = aList[i].split(" ").map(Number)

        if (numbers.length <= 1) {
            continue;
        }

        if (checkIncreasing(numbers)) {
            count++;
            console.log(numbers, ": this increased - length: ", numbers.length)
        } else if (checkDecreasing(numbers)) {
            count++;
            console.log(numbers, ": this decreased - length: ", numbers.length)
        } else {
            console.log(numbers, " - length: ", numbers.length)
        }
    }

    return count;
}

async function main (){
    let file = Bun.file("./input.txt")
    let input: string = await file.text();
    let buffer: string[] = input.split("\n");
    let total = readRow(buffer);
    console.log(total)
}

main();
