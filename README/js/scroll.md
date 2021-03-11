scroll API
-
scroll 을 담당하는 API

scrollTo
-

```js
window.scrollTo({
    top: 요소.offsetTop,
    behavior: 'smooth'
})
```
* top 이 특정 px 만큼 되는 거리까지 스크롤 해준다.
* left, right, bottom 등등의 속성을 사용할 수 있다.

이 때  
offsetTop : 부모 요소의 꼭대기로 부터 떨어진 거리

scrollBy
-
```js
scrollBy(x, y)
```
* 현재 스크롤바가 있는 위치에서 x, y인 넘겨준 값인 좌표만큼만 이동



