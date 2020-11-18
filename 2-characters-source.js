function log2(x){
    return Math.log(x) / Math.log(2);
}
function myFunction(){
    var number, pa0, pa1, pb0, pb1, pb0a0, pb0a1, pb1a0, pb1a1, HA, HB, pb0_a0, pb0_a1, pb1_a0, pb1_a1, HBA, IAB;
    
    number = parseInt(document.getElementById("number").value);
    pa0 = parseFloat(document.getElementById("p(a0)").value);
    //document.getElementById("pa0").innerHTML = "p(a0) = "+ pa0;

    pa1 = 1-pa0;
    pb0a0 = parseFloat(document.getElementById("p(b0|a0)").value);
    pb0a1 = parseFloat(document.getElementById("p(b0|a1)").value);
    pb1a0 = parseFloat(document.getElementById("p(b1|a0)").value);
    pb1a1 = parseFloat(document.getElementById("p(b1|a1)").value);
    
    HA = pa0*log2(1/pa0)+pa1*log2(1/pa1);
    document.getElementById("HA").innerHTML = "H(A) = "+ HA.toFixed(number);

    pb0 = pa0*pb0a0 + pa1*pb0a1;
    document.getElementById("pb0").innerHTML = "p(b0) = "+ pb0.toFixed(number);
    pb1 = 1 - pb0;
    document.getElementById("pb1").innerHTML = "p(b1) = "+ pb1.toFixed(number);

    HB = pb0*log2(1/pb0)+pb1*log2(1/pb1);
    document.getElementById("HB").innerHTML = "H(B) = "+ HB.toFixed(number);

    pb0_a0=pa0*pb0a0;
    pb0_a1=pa1*pb0a1;
    pb1_a0=pa0*pb1a0;
    pb1_a1=pa1*pb1a1;

    HBA = pb0_a0*log2(1/pb0a0)+pb0_a1*log2(1/pb0a1)+pb1_a0*log2(1/pb1a0)+pb1_a1*log2(1/pb1a1)
    document.getElementById("HBA").innerHTML = "H(B|A) = "+ HBA.toFixed(number);

    IAB = HB-HBA;
    document.getElementById("IAB").innerHTML = "I(A;B) = "+ IAB.toFixed(number);

}
//console.log("[p(b0|a0)", " ", "p(b1|a0) \n", "p(b0|a1)"," ", "p(b1|a1)] =");
//console.log(0.16*log2(1/0.4)+ 0.1*log2(1/0.5)+0.16*log2(1/0.4)+0.08*log2(1/0.2)+0.05*log2(1/0.25)+0.1*log2(1/0.25)+0.16*log2(1/0.4)+0.05*log2(1/0.25)+0.14*log2(1/0.35));
//console.log(2/3*log2(3/2)+1/3*log2(3));