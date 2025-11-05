const fs = require('fs');
const [N,L] = fs.readFileSync(process.platform == "linux" ? "/dev/stdin": "./input.txt")
                .toString()
                .trim()
                .split(" ")
                .map((data) => data.replace('\r',""))
                .map((data) => Number(data))



for(let i = L; i <=100;i++){
    let numerator = 2 * N - i * (i-1);

    if(numerator < 0 ) break;

    let denom = 2 * i;

    if(numerator % denom == 0){
        let a = numerator / denom;
        if(a >= 0){
            let ans = Array.from({length:i},(_,j) => a + j);
            console.log(ans.join(" "));
            process.exit(0);
        }
    }
}



console.log(-1);