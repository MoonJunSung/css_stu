$(".menu").hover(
    function(){
        $(".sub-menu").stop().sildeDown("slow");
    },
    function(){
         $(".sub-menu").stop().sildeUp("slow");
    }
);