'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    // Write your code here
     // Step 1: Create a unique, descending-ranked array
    let uniqueRanked = [];
    for (let i = 0; i < ranked.length; i++) {
        if (i === 0 || ranked[i] !== ranked[i - 1]) {
            uniqueRanked.push(ranked[i]);
        }
    }
    
    const result = [];
    let n = uniqueRanked.length;
    let index = n - 1; // Start at the lowest rank

    for (let i = 0; i < player.length; i++) {
        let score = player[i];
        
        // Move up the leaderboard as long as player score >= leaderboard score
        while (index >= 0 && score >= uniqueRanked[index]) {
            index--;
        }
        
        // Player's rank is index + 2
        result.push(index + 2);
    }
    
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
