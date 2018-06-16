let num = Number(prompt("Number mothefucker! Write it!"));

for (y = num; y > 0; y--) {
    let str= ' ';
    for (i = num; i > 0; i--) {
        str+="* ";
    }
    
    console.log(str);
    console.log("\n");
}