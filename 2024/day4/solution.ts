function toArray(aString: string): string[][] {
    let sublist: string[] = aString.split("\n");
    let aList: string[][] = [];
    for (let i = 0; i < sublist.length; i++) {
        let row = sublist[i].split("");
        aList.push(row);
    }
    return aList;
}

function check(array: string[][], target): number{
    let total = 0;
    const reversed = [...target].reverse();
   
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === target[0]) {
                //if (checkRow(array, i, j, target) == true){
                //    total++;
                //}
                //if (checkCol(array, i, j, target) == true){
                //    total++;
                //}
                //if (checkNegSlope(array, i, j, target) == true){
                //    total++;
                //}
                console.log(array[i][j], "starting TARGET")
                if (checkPosSlope(array, i, j, target) == true){
                    total++;
                }
            } else if (array[i][j] === reversed[0]){
                //if (checkRow(array, i, j, reversed) == true){
                //    total++;
                //}
                //if (checkCol(array, i, j, reversed) == true){
                //    total++;
                //}
                //if (checkNegSlope(array, i, j, reversed) == true){
                //    total++;
                //}
                console.log(array[i][j], "starting REVERSED")
                if (checkPosSlope(array, i, j, reversed) == true){
                    total++;
                }
            }
        }
    }
    
    return total;
}

function checkRow(array: string[][], x: number, y: number, target: string[]): boolean {
    let run = 0;
    for (let i = y; i < array[x].length - 1; i++){
        if (array[x][i] == target[run]){
            run++;
            continue;
        } else {
            break;
        }
    }
    if (run === target.length) {
        return true
    }
    
    return false;
}

function checkCol(array: string[][], x: number, y: number, target: string[]): boolean {
    console.log("COLS ==================")
    let run = 0;
    for (let i = x; i < array.length - 1; i++){
        console.log("array: ", array[x][i], "/ x: ", x, "/ y: ", y)
        if (array[i][y] == target[run]){
            run++;
            console.log("if-was-true")
            continue;
        } else {
            break; 
        }
    }
    console.log("end: ", run)
    if (run === target.length) {
        return true; 
    }

    return false;
}


function checkNegSlope(array: string[][], x: number, y: number, target: string[]): boolean{
    console.log("NEGSLOPE ==================")
    let run = 0;
    for (let i = 0; i < array?.length && i < array[x]?.length; i++) {
        console.log("/ ARRAY: ", array[x+i][y+i])
        console.log("/ x: ", x, "/ y: ", y)
        if (
            x + i < array.length &&
            y + i < array[x].length &&
            array[x+i][y+i] === target[run]
        ){
            console.log("if-was-true")
            run++;
            continue;
        } else {
            break;
        } 
    }
    console.log("end: ", run)
    if (run == target.length){
        return true;
    }

    return false;
}


function checkPosSlope(array: string[][], x: number, y: number, target: string[]): boolean{
    console.log("POSSLOPE ==================")
    let run = 0;
    for (let i = 0; i < array?.length && i < array[x]?.length; i++) {
        if (
            x + i < array.length &&
            y - i >= 0){

        console.log("/ ARRAY: ", array[x+i][y-i])
            }
        console.log("/ x: ", x, "/ y: ", y)
        if (
            x + i < array.length &&
            y - i >= 0 &&
            array[x+i][y-i] === target[run]
        ){
            console.log("if-was-true")
            run++;
            continue;
        } else {
            break;
        } 
    }
    
    console.log("end: ", run)
    if (run == target.length){
        return true;
    }

    return false;
}

async function main() {
    const file = Bun.file("example.txt")
    let input: string = await file.text();
    const myArray: string[][] = toArray(input);
    const target = ["X","M","A","S"];
    console.log(check(myArray, target))
}

main()
