let matrix = [ 
    [ 0.4, 0.2, 0.4 ], 
    [ 0.5, 0.25, 0.25 ],
    [ 0.4, 0.25, 0.35]
]

let pa = [2/5, 1/5, 2/5]
let pb = []

let length = pa.length;

for (let i = 0; i < length; i++) {
let temp = 0;
for (let j = 0; j < length; j++) {
temp+= matrix[j][i]*pa[j];
}
pb.push(temp);
}

let pAwithConditionB = [];
let probabilitySync = [];
let pBwithConditionA = [];

for (let i = 0; i < length; i++) {
probabilitySync[i] = [];
pAwithConditionB[i] = [];
for (let j = 0; j < length; j++) {
probabilitySync[i].push(matrix[i][j] * pa[i]);
pAwithConditionB[i].push(matrix[i][j] * pa[i] / pb[j]);
}
}

let entropyAwithConditionnB = 0;
for (let i = 0; i < length; i++) {
for (let j = 0; j < length; j++) {
entropyAwithConditionnB += probabilitySync[i][j] * Math.log2(1 / pAwithConditionB[i][j]);
}
}

let entropyBwithConditionnA = 0;
for (let i = 0; i < length; i++) {
for (let j = 0; j < length; j++) {
entropyBwithConditionnA += probabilitySync[i][j] * Math.log2(1 / matrix[i][j]);
}
}

let entropyA = 0;
for (let i = 0; i < length; i++) {
entropyA += pa[i] * Math.log2(1 / pa[i]);
}

let entropyB = 0;
for (let i = 0; i < length; i++) {
entropyB += pb[i] * Math.log2(1 / pb[i]);
}

let result = entropyA - entropyAwithConditionnB;
let entropySync = entropyA + entropyAwithConditionnB;

console.log("H(A) = " + round(entropyA));
console.log("H(B) = " + round(entropyB));
console.log("H(A/B) = ", round(entropyAwithConditionnB));
console.log("H(B/A) = ", round(entropyBwithConditionnA));
console.log("H(A,B) = ", round(entropySync));
console.log("I(A;B) = " + round(result));

function round (t) {
return Math.round((t + Number.EPSILON) * 1000) / 1000
}