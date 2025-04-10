function toArray(aString: string): string[][] {
    let sublist: string[] = aString.split("\n");
    let aList: string[][] = [];
    for (let i = 0; i < sublist.length; i++) {
        let row = sublist[i].split("");
        aList.push(row);
    }
    return aList;
}

function printTwoArray(array: string[][]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(i, j, ": ",array[i][j])
        }
    }
}

function checkColumn(): number {
    
}


async function main() {
    const file = Bun.file("input.txt")
    let input: string = await file.text();
    let myArray: string[][] = toArray(input);
    printTwoArray(myArray);
}


main()
