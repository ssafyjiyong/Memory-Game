# Memory Game
> **개인 프로젝트** <br/> **개발기간: 2023.11 ~ 2023.11**

## 프로젝트 소개
HTML, CSS, JavaScript를 활용해 카드뒤집기 게임 구현

## 주요 기능

### 1️⃣ 카드의 내용을 무작위로 배치
- 카드를 무작위로 배치하여 매번 같은 위치에 같은 그림이 나타나지 않도록 설정

### 2️⃣ 동일한 카드를 선택하면 PASS
- 동일한 두 개의 카드를 뒤집으면 정답, 다시 뒤집어지지 않음
- 그렇지 않을 경우 다시 뒤집어지는 게임의 기본 동작

### 3️⃣ 스톱워치를 이용한 기록 측정
- 아래에 스톱워치를 배치하고, 게임이 종료되는 순간 기록을 확인할 수 있도록 설정

### 4️⃣ 게임 RESTART 기능
- 게임이 종료되면 스톱워치 아래에 RESTART 버튼 생성
- 버튼을 누르면 카드가 초기화되고 재시작

## 차별점

### ⭐️ 타인종 효과를 이용한 흥미 유발
- 자신과 다른 인종의 얼굴을 잘 구별하지 못하는 현상의 타인종 효과를 이용해 게임의 난이도와 흥미를 높임
- 추가적인 흥미 요소로 할리우드 유명 여배우들의 사진을 활용

### ⭐️ 카드 무작위 배치 랜덤 함수
- 통상적으로 사용되는 Math.random() 셔플 방식의 편향성 발견, 피셔-예이츠 셔플 알고리즘을 선택해 기능 개선


## Stacks
### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)                   

### Development
![HTML5](https://img.shields.io/badge/HTML5-F05032?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS-007ACC?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)

## 하고싶은 말
▶ 추가적인 기능으로 기록을 데이터 베이스에 저장하고 페이지에 랭킹을 표시한다면 사용자 체류시간을 높일 수 있을 것이다. 그러나 서버가 없는 현재 상황에서는 활용도가 높지 않다는 판단 하에 해당 기능을 추가하지느 않았다.