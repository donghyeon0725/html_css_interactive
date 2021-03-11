클래스 추가 제거하기
-

active 클래스의 경우 추가 제거함으로써, 활성화 비활성화를 하는 경우가 많다.  
이럴 때 classList 를 사용하면 쉽게 클래스를 추가 제거 할 수 있다.

```js
for (let i=0; i<album.length; i++) {
    pointBtnAll[i].classList.remove("active");
}
pointBtnAll[pageNum].classList.add("active");
```

[클래스 API](https://developer.mozilla.org/ko/docs/Web/API/Element/classList "클래스 API")