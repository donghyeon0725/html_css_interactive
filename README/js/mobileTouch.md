모바일 터치 처리
-
```js
if(mobileChk()){
    contentWrap.addEventListener("touchstart", touchFunc, false);
    // contentWrap.addEventListener("touchmove", touchFunc, false);
    contentWrap.addEventListener("touchend", touchFunc, false);
}
```
모바일 기기가 맞을 때
* touchstart : 터치시작
* touchmove : 터치 도중
* touchend : 터치 끝


```js
function touchFunc(evt){
    var type = null;
    var touch = null;

    switch (evt.type) {
        case "touchstart":
            type = "mousedown";
            touch = evt.changedTouches[0];
            start_X = touch.clientX;
            end_X = 0;
            break;

        case "touchmove":
             type = "mousemove";
             touch = evt.changedTouches[0];
        break;

        case "touchend":
            type = "mouseup";
            touch = evt.changedTouches[0];
            end_X = touch.clientX;
            var chkNum = start_X - end_X;
            var chkNumAbs = Math.abs(chkNum);

            if(chkNumAbs > 100){
                // //터치를 많이 했으면 실행
                if(chkNum < 0){
                    ...
                }else {
                    ...
                }
            }
            break;
    }
}
```
* changedTouches : 이벤트에 할당된 모든 접촉점에 대한 터치 리스트 

이벤트는 종류가 많으므로 이렇게 switch 문으로 관리하면 좋을 것 같다.

---

참고할 사이트
-
[모바일 터치 이벤트](https://wit.nts-corp.com/2013/12/20/583 "모바일 터치 이벤트")