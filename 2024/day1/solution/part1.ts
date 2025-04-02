const file = Bun.file("../input.txt");
let input:string = await file.text();
let buffer:string[] = input.split("\n");


var left:int[] = [];
var right:int[] = [];

for (let i:int = 0; i < buffer.length - 1; i++) {
    let parts:string = buffer[i]
    let array = parts.split("   ")
    left.push(array[0])
    right.push(array[1])
}

