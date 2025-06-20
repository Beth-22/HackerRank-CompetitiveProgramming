'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    let firstChar = s[0];

    if ('aeiou'.includes(firstChar)) {
        letter = 'A';
    } else if ('bcdfg'.includes(firstChar)) {
        letter = 'B';
    } else if ('hjklm'.includes(firstChar)) {
        letter = 'C';
    } else {
        letter = 'D';
    }

    return letter;
}



function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
