# Position속성 좀 더 다뤄보기 + S01 돌아보기

![asd](https://user-images.githubusercontent.com/42693257/70844653-a112bf00-1e87-11ea-81cf-501892675a14.png)

## 알게 된 것
1. 인라인요소에 float을 주면 블록으로 바뀐다.

2. 로고에 있는 텍스트를 어떻게 안보이게 할 것인가? -> IR기법을 각자 공부해보라~
- text-indent / color: transparent / position:absolute; left:-9999em
  
3. 메인 사진 안에 있는 컨텐츠도 position으로 했다. (margin을 편하게 줄 수 있다.)

4. 메뉴 hover효과   
- width가 고정값일 때, left:0, right:0;을 주면 left:0이 이기지만, auto일 때는 부모의 너비만큼 꽉 찬다.
- width가 고정값일 때, margin을 주면 바깥을 밀어내지만, auto일 때나 left:0; right:0;으로 커졌을 때는 자기 자신이 밀린다.(작아진다.)
