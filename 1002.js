// https://www.acmicpc.net/problem/1003


const fs = require('fs');
const [N,...L] = fs.readFileSync(process.platform == "linux" ? "/dev/stdin": "./input.txt")
                .toString()
                .trim()
                .split("\n")
                .map((data) => data.replace('\r',""))
                .map((data) => Number(data))


for(let i = 0; i< L.length;i++){
    let zeroCount = 0;
    let oneCount = 0;
    const fibonacci = (num) => {
        if(num != 1 && num != 0){
            return fibonacci(num-1) + fibonacci(num-2)
        }else if(num === 10){
            zeroCount+=34;
            oneCount+= 55;
            return;
        }
        else if(num === 0){
            zeroCount++;
            return 0;
        } else if(num === 1){
            oneCount++;
            return 1;
        } 
    }

    fibonacci(L[i]);
    console.log(zeroCount, oneCount);
}
