let a = 1;
let b = 5;
let c = 10;

if(a > b && a > c) {
    console.log(a + " é maior que " + b + " e " + c);
} else if(b > c && b > a){
    console.log(b + " é maior que " + a + " e " + c);
} else {
    console.log(c + " é maior que " + a + " e " + b);
}