// GFG: https://www.geeksforgeeks.org/problems/shortest-job-first/1

function solve(bt: number[]): number {
    bt.sort((a, b) => a - b);  // Sort burst times (SJF)

    let waitingTime = 0;
    let currentTime = 0;

    for (const job of bt) {
        waitingTime += currentTime;
        currentTime += job;
    }

    return Math.floor(waitingTime / bt.length);
}

