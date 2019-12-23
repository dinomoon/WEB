# 박스모델 다시보기 + 미디어쿼리

![주석 2019-12-15 225207](https://user-images.githubusercontent.com/42693257/70863644-8d518080-1f8d-11ea-9424-de7edf159f0d.png)

![4](https://user-images.githubusercontent.com/42693257/71082392-5faa4880-21d4-11ea-8c7f-4446fd3c19d4.png)

## 알게 된 것
1. 인라인 요소에 position:absolute;를 주면 inline-block은 아니지만 비슷하게 된다.(붕 뜨기는 하지만 width, height, padding, margin이 모두 가능하다.)

2. width를 지정하지 않은 블록요소의 너비는 width:100%;가 아니라 width:auto; 이다.

3. width: 100%;와 width: auto;의 차이점
  - width: 100%; 자신이 활용할 수 있는 공간의 100%를 픽셀값으로 가져온다.(유연하지 않다.)
  - width: auto; 자신이 활용할 수 있는 공간에 margin, padding, border를 포함한다.
  - width: auto;일 때 네거티브 마진을 사용하면 해당요소의 크기를 키울 수도 있다.
  - width 또는 height이 고정값일 때 네거티브 마진을 주면 주변 공간이 변하는 데, auto일 때는, 자기 자신의 크기가 변한다.

4. 미디어쿼리를 사용할 때, left값을 초기화하기 위한 initial이라는 속성이 존재한다는 것을 알게되었다.
