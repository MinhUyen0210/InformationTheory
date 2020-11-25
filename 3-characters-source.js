function log2(x){
    return Math.log(x) / Math.log(2);
}
function myFunction(){
    var number, pa0, pa1, pa2, pb0, pb1,pb2, pb0a0, pb0a1,pb0a2, pb1a0, pb1a1,pb1a2,pb2a0, pb2a1,pb2a2, HA, HB, pb0_a0, pb0_a1,pb0_a2, pb1_a0, pb1_a1,pb1_a2,pb2_a0, pb2_a1,pb2_a2, HBA, IAB;
    
    number = parseInt(document.getElementById("number").value);
    pa0 = parseFloat(document.getElementById("p(a0)").value);
    pa1 = parseFloat(document.getElementById("p(a1)").value);
    pa2 = parseFloat(document.getElementById("p(a2)").value);
    //document.getElementById("pa0").innerHTML = "p(a0) = "+ pa0;

    let pa = [ pa0, pa1, pa2]

    pb0a0 = parseFloat(document.getElementById("p(b0|a0)").value);
    pb0a1 = parseFloat(document.getElementById("p(b0|a1)").value);
    pb0a2 = parseFloat(document.getElementById("p(b0|a2)").value);
    pb1a0 = parseFloat(document.getElementById("p(b1|a0)").value);
    pb1a1 = parseFloat(document.getElementById("p(b1|a1)").value);
    pb1a2 = parseFloat(document.getElementById("p(b1|a2)").value);
    pb2a0 = parseFloat(document.getElementById("p(b2|a0)").value);
    pb2a1 = parseFloat(document.getElementById("p(b2|a1)").value);
    pb2a2 = parseFloat(document.getElementById("p(b2|a2)").value);

    let matrix = [ 
        [ pb0a0, pb1a0, pb2a0 ],
        [ pb0a1, pb1a1, pb2a1 ],
        [ pb0a2, pb1a2, pb2a2 ]
    ]

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
    
    document.getElementById("HA").innerHTML = "H(A) = "+ round(entropyA);

    document.getElementById("HB").innerHTML = "H(B) = "+ round(entropyB);
    
    document.getElementById("HBA").innerHTML = "H(B|A) = "+ round(entropyBwithConditionnA);
    
    document.getElementById("HAB").innerHTML = "H(A|B) = "+ round(entropyAwithConditionnB);
    
    document.getElementById("HAandB").innerHTML = "H(A,B) = "+ round(entropySync);
    
    document.getElementById("IAB").innerHTML = "I(A;B) = "+ round(result) + "bits/symbol";
    
    // document.getElementById("pb0").innerHTML = "p(b0) = "+ pb0.toFixed(number);

    // document.getElementById("pb1").innerHTML = "p(b1) = "+ pb1.toFixed(number);
}
function round (t) {
    return Math.round((t + Number.EPSILON) * 1000) / 1000
}