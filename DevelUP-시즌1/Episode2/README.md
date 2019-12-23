# 클래스 선택자로 좀 더 복잡한 페이지를 만들어보자

![jack3](https://user-images.githubusercontent.com/42693257/70528136-d4f09a80-1b90-11ea-83f3-55bc76ba9d23.png)

## 알게 된 것
1. 마크업 할 때는 레이아웃을 먼저 잡는다!
2. background-position: right 30px center; 처럼(오른쪽에서 30px, 수직정렬) background-image의 위치를 정할 수 있다.
3. 마진병합(margin collapsing) 
  - 인접해있는 block요소끼리만 일어난다.
  - 상하단만 해당된다.
  - 해결 방법
    1. 부모에 overflow: hidden; 을 준다.
    2. clearfix:before, clearfix:after {content: ' '; display: table}
