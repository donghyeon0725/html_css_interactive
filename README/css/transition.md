transition
-
* 스타일의 전환을 위해서 애니메이션 효과를 줄때 사용

ex)
![트랜지션](/image/transition.gif)

|속성|설명|
|---|---|
|transition-property|변화를 적용할 CSS속성을 지정|
|transition-duration|변화가 시작된 시점부터 끝날 시점까지의 시간을 지정|
|transition-timing-function|변화 속도의 패턴을 지정|
|transition-delay|변화를 시작할 시간 지정|


transition-property
-
|속성|설명|
|---|---|
|none|적용할 속성이 없음|
|all|모든 속성에 변화 적용|
|변화줄 css속성|특정 속성에만 변화 적용|

예)
```css
.transition { 
    background-color:red;
    transition-property:background-color;
    transition-duration:.8s;
}
.transition:hover {
    background-color:black;
}
```

마우스를 올리면 0.8초에 걸쳐 빨간색에서 검은색으로 변경하겠다는 의미


transition-duration
-
* 애니메이션을 전환하는데 걸리는 시간
 
 
transition-timing-function
-
|속성|설명|
|---|---|
|ease|시작은 천천히 중간에는 빠르게 그리고 다시 끝에는 천천히 변화합니다.|
|linear|일정한 속도로 변화하게 됩니다.|
|ease-in|천천히 시작해서 빠르게 종료됩니다.|
|ease-out|빠르게 시작해서 느리게 끝납니다.|
|ease-in-out|시작, 종료 두 지점 다 천천히 변화를 가져갑니다.|

* [각 속성에 시뮬레이션](http://www.tcpschool.com/examples/tryit/tryhtml.php?filename=css3_transform_transition_03 "각 속성에 시뮬레이션")

transition-delay
-
* 애니메이션 효과를 나중에 시작하고 싶을 때