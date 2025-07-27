function jobSequencing(deadline: number[], profit: number[]): number[] {
    const n = deadline.length;

    const jobs = [];
    let maxDead = 0;
    for (let i = 0; i < n; i++) {
        jobs.push({ deadline: deadline[i], profit: profit[i] });
        maxDead = Math.max(deadline[i], maxDead);
    }

    jobs.sort((a, b) => b.profit - a.profit);
    
    const slots = new Array(maxDead + 1).fill(false);
    
    let totalProfit = 0;
    let countJobs = 0;

    for (let job of jobs) {
        for (let t = job.deadline; t > 0; t--) {
            if (!slots[t]) {
                slots[t] = true;
                totalProfit += job.profit;
                countJobs++;
                break;
            }
        }
    }

    return [countJobs, totalProfit];
}