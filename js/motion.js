let prev_button, next_button;
let pageNum = 0;
let album;
let totalNum;
let pointBtnAll;
let contentWrap;
let bgArray = new Array();
bgArray[0] = ["#0272a4","#f6a564"];
bgArray[1] = ["red","black"];
bgArray[2] = ["#b7c0c9","#285c5a"];


window.onload = function() {
    prev_button = document.querySelectorAll('button')[0];
    next_button = document.querySelectorAll('button')[1];
    pointBtnAll = document.querySelectorAll('.pointWrap li');
    contentWrap = document.querySelector(".contentWrap");

    album = document.querySelectorAll('.album');
    totalNum = album.length;

    prev_button.addEventListener("click", function () {
        if(pageNum > 0) {
            pageNum--;
        } else {
            pageNum = totalNum-1;
        }
        pageChangeFunc();
    })

    next_button.addEventListener("click", function () {
        if(pageNum < totalNum -1) {
            pageNum++;
        } else {
            pageNum = 0;
        }
        pageChangeFunc();
    });

    for (let i=0; i<pointBtnAll.length; i++) {
        pointBtnAll[i].addEventListener("click", function () {
            pageNum = i;
            pageChangeFunc();
        })
    }

    if(mobileChk()){
        contentWrap.addEventListener("touchstart", touchFunc, false);
        // contentWrap.addEventListener("touchmove", touchFunc, false);
        contentWrap.addEventListener("touchend", touchFunc, false);
    }

    let start_X = 0;
    let end_X = 0;

    pageChangeFunc();

    /* 터치 처리와 관련된 */
    function touchFunc(evt){
        // console.log(evt.type)
        // return false;
        // evt.preventDefault();

        var type = null;
        var touch = null;

        switch (evt.type) {
            case "touchstart":
                type = "mousedown";
                touch = evt.changedTouches[0];
                start_X = touch.clientX;
                //console.log("start_X : " + start_X);
                end_X = 0;
                break;
            /*
            case "touchmove":
                 type = "mousemove";
                 touch = evt.changedTouches[0];
            break;
            */

            case "touchend":
                type = "mouseup";
                touch = evt.changedTouches[0];
                end_X = touch.clientX;

                //console.log("end_X : "+ end_X);

                var chkNum = start_X - end_X;
                var chkNumAbs = Math.abs(chkNum);
                //console.log(chkNum)

                if(chkNumAbs > 100){
                    // //터치를 많이 했으면 실행
                    if(chkNum < 0){
                        //왼쪽으로 터치
                        //pageNum--;
                        //에러가 납니다.
                        //수정해보세요.
                        if(pageNum > 0) {
                            pageNum--;
                        } else {
                            pageNum = totalNum-1;
                        }
                    }else {
                        //오른쪽으로 터치
                        //pageNum++;
                        //에러가 납니다.
                        //수정해보세요.
                        if(pageNum < totalNum -1) {
                            pageNum++;
                        } else {
                            pageNum = 0;
                        }
                    }
                    pageChangeFunc();
                }
                // 모바일 스와이프와 관련한 라이브러리 찾아보기
                break;
        }
    }

    function pageChangeFunc() {
        //document.querySelector('.contentWrap').style.background = "linear-gradient(120deg," + bgArray[pageNum][0] + ", " + bgArray[pageNum][1] + ")";
        for (let i=0; i<album.length; i++) {
            album[i].classList.remove("active");
            pointBtnAll[i].classList.remove("active");
        }
        album[pageNum].classList.add("active");
        pointBtnAll[pageNum].classList.add("active");
        document.querySelectorAll(".disk_inner")[pageNum].style.background = bgArray[pageNum][0];
    }

    /* 해당 모바일이 무엇인지 검사해줌 */
    function mobileChk() {
        let mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
        for (let info in mobileKeyWords) {
            if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
                return true;
            }
        }
        return false;
    }
}

