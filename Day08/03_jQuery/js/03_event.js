
// 문서 준비 이벤트
$(function () {
    // 이벤트 처리 이벤트
    // : on('이벤트 타입', 콜백함수 {})
    // * 이벤트타입: click, keyup, change ...
    // * 콜백함수(이벤트 핸들러) : 이벤트 발생시 실행되는 함수

    /*
        콜백함수
        - function()    : $(this)사용가능
        - () => {}      : $(this)사용불가
    */

    $('#item1').on("click", function () {
        $('#item1').css('color', 'red')
    })
    $('#item2').on("click", function () {
        $(this).css('color', 'gold')
    })
    // mouseover : 마우스 올렸을 때
    $('#item3').on("mouseover", function () {
        $(this).css('color', 'black')
        $(this).css('backgroundColor', 'gray')
    })

    // mouseout : 마우스 벗어날 때
    $('#item3').on("mouseout", function () {
        $(this).css('color', 'white')
        $(this).css('backgroundColor', '#3498db')
    })

    $('#item4')
        .on("mouseover", function () {
            $(this).css('color', 'black')
            $(this).css('backgroundColor', 'gray')
        })
        .on("mouseout", function () {
            $(this).css('color', 'white')
            $(this).css('backgroundColor', '#3498db')
        }
    )

    $('#item5')
        .on("mouseover", function () {
            $(this).css('color', 'red')
            $(this).css('background-color', 'gray')
        })
        .on("mouseout", function () {
            $(this).css('color', 'white')
            $(this).css('background-color', '#3498db')
        })
        .on('click', function () {
            $(this).css('color', 'springgreen')
        })
        .on('dblclick', function () {
            $(this).css({
                border : '10px solid hotpink',
                backgroundColor : 'black',
                color: 'gold'
            })
        })
})