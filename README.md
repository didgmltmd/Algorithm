# Algorithm study Repository

> 이 저장소는 알고리즘 문제 풀이 및 공부 과정을 정리하기 위한 공간입니다.  
> 꾸준한 문제 풀이와 코드 개선을 통해 문제 해결 능력을 향상시키는 것을 목표로 합니다.


## 목표

-  **하루 최소 한 문제 이상 풀이하기**  
  꾸준한 학습 습관을 유지하며 문제 해결 능력을 향상시킵니다.

-  **효율적인 코드 작성 및 리팩토링**  
  가독성과 성능을 모두 고려한 코드를 작성합니다.

-  **알고리즘 유형별 정리 및 복습**  
  유형별 접근법과 패턴을 체계적으로 정리합니다.

-  **주기적인 코드 리뷰와 개선**  
  과거 풀이를 다시 돌아보고 더 나은 방식으로 개선합니다.


## 폴더구조

Algorithm  
├── BOJ/ # 백준 (Baekjoon Online Judge) 문제 풀이  
│ ├── Bronze/  
│ ├── Silver/  
│ ├── Gold/  
│ └── ...  
└── README.md  



## 사용 언어

- **JavaScript (Node.js)**  
  모든 문제는 Node.js 환경에서 작성되었으며,  
  백준 온라인 저지 환경(`Linux`)과 로컬 환경(`Windows`) 모두에서 동작하도록 구성했습니다.  

### 기본 입력 방식

```js
const fs = require("fs");
const N = fs
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();
```


백준 프로필

Baekjoon ID: gomboy11
🔗 [https://www.acmicpc.net/user/gomboy11](https://www.acmicpc.net/user/gomboy11)
