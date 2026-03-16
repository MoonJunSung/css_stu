//서브 메뉴 위아래로 보이도록 동작하는 js 코드 작성
//jquery 코드 형식 $().action( function() { $().action();} );

$(".menu>ul>li").hover(
    function() {
        $(this).children("ul").stop().slideDown("slow");
    },
    function() {
        $(this).children("ul").stop().slideUp("fast");
    }

);