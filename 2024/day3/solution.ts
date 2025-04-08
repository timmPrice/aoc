// ================================
//      Advent of Code Day 3
//      Maybe rust tommorow?
// My solution feels SO scuffed...
// ================================

function parseMult(aMult: string): number {
    // worth knowing more about capture groups and .map functions
    const pattern = /(-?\d+),(-?\d+)/ 
    let results: number[] = [];
    let total: number = 0;
    const match = aMult.match(pattern)
    total += Number(match[1]) * Number(match[2]);
    return total
}

function parseDoDont(aList: string[]): number{
    const mulPat = /mul\(-?\d+,-?\d+\)/g;
    const doPat = /do\(\)/g;
    const dontPat = /don\'t\(\)/g;
    let run = true;
    let total = 0;
    for (let i = 0; i < aList.length; i++){
        if (aList[i].match(doPat)) {
            run = true; 
            continue; 
        } else if(aList[i].match(dontPat)){
            run = false;
            continue;
        } else if (aList[i].match(mulPat)){
            if (run == true) {
                total += parseMult(aList[i]) 
            }  
        }
    }

    return total;
}

function matchPatterns(input: string): string[] {
    const pattern = /mul\(-?\d+,-?\d+\)|do\(\)|don\'t\(\)/g;
    return Array.from(input.matchAll(pattern)).map(m => m[0]);
}

async function main(): void {
    const file = Bun.file("./input.txt");
    let input: string = await file.text();
    let matches: string = matchPatterns(input);
    //console.log(matches)
    //let multmatch: number = parseMult(matches); 
    //console.log("section 1 answer: ", multmatch)

    let total: number = parseDoDont(matches);
    console.log(total)
}

main()
