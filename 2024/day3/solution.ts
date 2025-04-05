// ================================
//      Advent of Code Day 3
//      Maybe rust tommorow?
// ================================

function parseMult(aList: string[]): number {
    // worth knowing more about capture groups and .map functions
    const pattern = /(-?\d+),(-?\d+)/ 
    let results: number[] = [];
    let total: number = 0;
    for (let i = 0; i < aList.length; i++){
        const match = aList[i].match(pattern)
        total += Number(match[1]) * Number(match[2]);
    }

    return total
}

function matchPatterns(input: string): string[] {
    const pattern = /mul\(-?\d+,-?\d+\)/g;
    return Array.from(input.matchAll(pattern)).map(m => m[0]);
}

async function main(): void {
    const file = Bun.file("./input.txt");
    let input: string = await file.text();
    let matches: string = matchPatterns(input);
    let multmatch: number = parseMult(matches); 
    console.log(matches)
    console.log(multmatch)
}

main()
