function ioi(prm1,prm2) {
    let cal =(prm1 *0.8) + (prm2 * 0.8);
    return cal;
}


function ioi() {
    return arguments;
   let cal =(prm1 *0.8) + (prm2 * 0.8);
   return cal;
}
let protein_intake = ioi(54,56,58,60);
console.log("Daily protien req = ",protein_intake, "gm");
console.log(ioi(50,52,54,56,58,60));


function pwioi(alok) {
    let sum = 0;
    for (let i = 0; i < alok.length ; i++) {
        sum = sum + alok[i];
    }
    return sum;
}
alok = [1,2,3,4,5,6,7,8]
console.log(pwioi(alok));