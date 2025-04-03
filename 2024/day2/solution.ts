// ========================================
//      Advent of Code \ 2024 Day 2
//  why am I enjoying typescript so much?
// ========================================

function checkIncreasing(aList: number[]): boolean {
    for (let i = 0; i < (aList.length - 1); i++) {
        if (aList[i] < aList[i + 1] && Math.abs(aList[i] - aList[i + 1]) <= 3) {
            continue;
        }else {
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

// check if removing an element would cause it to return true
function deepCheck(aList: number[]): boolean {
    var temp: number[];
    for (var i = 0; i < aList.length; i++) {
        temp = [...aList];
        var removed = temp.splice(i, 1);
        
        if (temp.length <= 1) {
            continue;
        }

        if (checkIncreasing(temp) || checkDecreasing(temp)) {
            return true;
        }
    } 

    return false;
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
        } else if (checkDecreasing(numbers)) {
            count++;
        } else if (deepCheck(numbers)) {
            count++;
        }
    }

    return count;
}

async function main (){
    let file = Bun.file("./input.txt")
    let input: string = await file.text();
    let buffer: string[] = input.split("\n");
    let total = readRow(buffer);
    console.log("~ ====================== ~\nFinal Solution to both parts")
    console.log("total: ", total)
    console.log("~ ====================== ~")
}

main();
