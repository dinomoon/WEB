# float기반의 반응형 그리드 2탄 

![1](https://user-images.githubusercontent.com/42693257/71084802-67b8b700-21d9-11ea-969d-d6de953bd522.png)

![2](https://user-images.githubusercontent.com/42693257/71084803-67b8b700-21d9-11ea-8c30-44e12d71e99b.png)

![3](https://user-images.githubusercontent.com/42693257/71084807-68514d80-21d9-11ea-818b-2d220cb4bb07.png)

## 알게 된 것
1. img에 width: 100%을 주면 부모의 크기만큼 꽉 찬다.(만약, 사진이 부모의 크기보다 작다면 사진이 늘어나게 된다.) 하지만, max-width:100%를 주면 부모의 크기가 자신보다 커도 자신의 크기보다 커지지는 않는다.

2. float으로 그리드를 만들었을 때 가장 큰 단점은 각 그리드의 높이가 다르면 레이아웃이 깨진다는 것이다.
  - 이 때 해결방법 중 하나는 제목 부분은 white-space: nowrap;과 text-overflow: ellipsis;를 써주고
  - 내용 부분은 몇줄만 나오게 할 것인지 정해서 높이를 주는 것이다. 5줄만 출력하고 싶다 -> line-height: 원하는 값; height: 원하는 값 * 5em;
  - 나는 그냥 적당한 높이를 줬다.

3. html에 font-size:100%를 주면 사용자가 설정한 폰트사이즈가 적용된다.
  - 대부분 16px이기 때문에, font-size: 62.5%라고 하면 폰트사이즈는 10px이 되서 폰트사이즈를 계산하기 편하다.
  - 이 때, body에 font-size: 1.4rem; 을 주면 14px이 되는 것이다.
