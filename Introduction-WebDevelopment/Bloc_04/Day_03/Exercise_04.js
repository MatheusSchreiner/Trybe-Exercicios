let pyramidBase = 5;
let symbol = "*";
let lineInput = "";
let pyramidMiddle = (pyramidBase + 1) / 2;
let leftLine = (pyramidMiddle + 1);
let rightLine = (pyramidMiddle - 1);

for (var countLines = 0; countLines < pyramidMiddle; countLines +=1){
    for (var countColumns = 1; countColumns <= pyramidBase; countColumns += 1){
        if (countColumns > rightLine && countColumns < leftLine){
            lineInput += symbol;
        } else {
            lineInput += " ";
        }
    }
    console.log(lineInput);
    lineInput = "";
    rightLine -= 1;
    leftLine += 1;
}
