
// 문서 준비 이벤트
$(function () {
    
    // 스타일 변경하기
    // $(선택자).css('스타일 속성', '속성값')

    $('#item1').css('color', 'gold')
    $('#item2').css('color', 'black')
    $('#item3').css('color', 'orange')

    // 여러개의 스타일 속성 지정
    // 
    $('#item4 .inner').css({
        'color' :'coral',
        'font-size' : '72px',
        'border' : '10px solid hotpink',
        'width' : '800px',
        'height' : 'auto',
        'background-color' : 'black'
    })

    // 따옴표 빼고 카멜케이스로 작성
    $('#item5 .inner').css({
        color :'coral',
        fontSize : '72px',
        border : '10px solid hotpink',
        width : '800px',
        height : 'auto',
        backgroundColor : 'black'
    })
})