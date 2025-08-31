const scores = [82, 85, 88, 91, 84, 87, 89, 86, 90, 12];
const salaries = [32000, 34000, 31000, 33000, 35000, 37000, 1000000];
const weights = [1.1, 1.0, 0.9, 1.2, 1.0, 1.3, 8.5];
const temperatures = [22, 23, 21, 22, 24, 100, -10, 23, 22];

function cal(arr){
    const sorted = [...arr].sort((a,b)=>a-b);
    const median = getMedian(sorted);
    const lower = sorted.slice(0,Math.floor(sorted.length/2));
    const upper = sorted.length % 2 === 0 ? sorted.slice(sorted.length/2) : sorted.slice(Math.floor(sorted.length/2)+1);
    const q1 = getMedian(lower);
    const q3 = getMedian(upper);
    const iqr = q3-q1;

    const lowerFence = q1-1.5*iqr;
    const upperFence = q3+1.5*iqr;

    const outliers = sorted.filter(x=>x<lowerFence || x>upperFence);
    return {
        q1,
        median,
        q3,
        iqr,
        outliers
    };
}
function getMedian(arr){
    const mid = Math.floor(arr.length/2);
    return arr.length % 2 === 0 ? ((arr[mid-1] + arr[mid]) / 2) : arr [mid];
}

console.log(cal(scores));
console.log(cal(salaries));
console.log(cal(weights));
console.log(cal(temperatures));

console.log(scores); // test original array
