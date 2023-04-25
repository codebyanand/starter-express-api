// function isLeap(year) {
//     return (year%4 == 0);
// }

function HMLeap(s,e) {
    if (e>s) {let a = s;s = e;e = a}
    return Math.floor(s/4) - Math.floor((e-1)/4);
}

// function HMLeapL(s,e) {
//     if (e>s) {let a = s;s = e;e = a;}
//     let res = 0;
//     for (let i = e; i <= s; i++) {
//         if (isLeap(i)) {res++}
//     }
//     return res;
// }

function fdofyr(yr) {
    yr = yr - 1;
    let arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    return yr+1 + ": " + arr[(HMLeap(yr,1) + yr)%7]
}

// function fdofyrL(yr) {
//     yr = yr - 1;
//     let arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
//     return yr+1 + ": " + arr[(HMLeapL(yr,1) + yr)%7]
// }

console.log(fdofyr(1963));
