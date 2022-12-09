// gcd - EX. 16, 6 (유클리드 호제법 - 최대공약수)
function GCD (a, b) {
    let c;
    while (b) { //b가 0이 될 때까지
        c = a % b; // 먼저 a % b를 계산함으로써, 후에 바뀐 a와의 계산이 안되도록

        a = b; // a = 6 -> 4 -> 2
        b = c; // b = 4 -> 2 -> 0
    }
    return a; // 2
}

// 프로세스)
// 16 % 6  = 4
// 6 % 4 = 2
// 4 % (2) = 0

GCD(16, 6); // 2

// lcm - EX. 16, 6 (최소공배수)
function LCM(a, b) { // a * b / 최대공약수
    return parseInt(a * b / gcd(a, b));
}

LCM(16, 6); // 48

// -----------------여러개의 수의 최소공배수 & 최대공약수를 구해야 할때,
function GCD (a, b) {
    if (b > a) { // 받는수가 정렬이 안될 수 도 있기 때문에
        let temp = b;
        b = a;
        a = temp;
    }

    let c;
    while (b) {
        c = a % b;

        a = b;
        b = c;
    }
    return a;
}

function LCM(a, b) {
    return parseInt(a * b / GCD(a, b));
}

let a = [2,4];
let b = [16,32,96];

let lcm_a = a[0], gcd_b = b[0];

for (let i=0;i<a.length;i++) lcm_a = LCM(a[i], lcm_a);
for (let i=0;i<b.length;i++) gcd_b = GCD(b[i], gcd_b);

console.log(lcm_a, gcd_b);