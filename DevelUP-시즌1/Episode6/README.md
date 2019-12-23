# float속성 두 번째 이야기

![Episode6](https://user-images.githubusercontent.com/42693257/70801260-c523c100-1df1-11ea-9794-0c63683d5c50.png)

## 알게 된 것
1. clearfix를 사용하지 않는 다른 방법들 -> display: flow-root; / overflow: hidden; 31분25초 ~ 40분
2. 만약 사이드바를 만들 때 float:left를 사용했고, 오른쪽에 contens가 있다면 contents의 시작은 사이드바의 시작과 같다. 이 때 contents의 시작이 사이드바가 끝나는 곳으로 하고 싶다면 overflow:hidden을 주면 된다.
  - overflow가 부여된 요소는 독립적인 문서로 시작된다!
3. float을 받은 요소는 inline으로 바뀌는 것이 아니라 자신의 크기만큼 공간을 차지하는 것이다.
4. 별점을 css하는 것이 아직 이해가 완전히 되지 않았다.
5. border를 이용해 말풍선을 만들 수 있다.
