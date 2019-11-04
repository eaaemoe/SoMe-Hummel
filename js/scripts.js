$(function () {

    $(".logo, #page1, #clouds").addClass("load");

    var options = {
        videoId: '0XPmEy6U8uM',
        start: 0,
        repeat: true,
        mute: true
    };
    $('#wrapper').tubular(options); 

    var $pages = $(".page");
    var i = 0;

    $("a.left").on('click', function (e) {
        e.preventDefault();
        i = (i - 1 + $pages.length) % $pages.length;
        $pages.hide().eq(i).show();
        if (i != 0) {
            $pages.eq(i).addClass("load");
        }
        //console.log(i);
        pageChk(i);
    });

    $("a.right").on('click', function (e) {
        e.preventDefault();
        i = (i + 1) % $pages.length;
        $pages.hide().eq(i).show();
        if (i != 0) {
            $pages.eq(i).addClass("load");
        }
        //console.log(i);
        pageChk(i);
    });

    $(".page").on('swiperight', function (e) {
        e.preventDefault();
        i = (i - 1 + $pages.length) % $pages.length;
        $pages.hide().eq(i).show();

        if (i != 0) {
            $pages.eq(i).addClass("load");
        }
        //console.log(i);
        pageChk(i);
    });

    $(".page").on('swipeleft', function (e) {
        e.preventDefault();
        i = (i + 1) % $pages.length;
        $pages.hide().eq(i).show();
        if (i != 0) {
            $pages.eq(i).addClass("load");
        }
        //console.log(i);
        pageChk(i);
    });

    function pageChk(i) {
        if (i == 1) {
            $("#alert1").stop().delay(5000).animate({
                right: '5%'
            }, 750);
        }

        if (i == 2) {
            $("#alert2").stop().delay(5000).animate({
                right: '5%'
            }, 750);
        }

        if (i == 3) {
            $("#alert3").stop().delay(5000).animate({
                right: '5%'
            }, 750);
        }
        console.log(i);
    };

    var $shirt = $(".shirts");
    var x = 0;

    $("a.up").on('click', function (e) {
        e.preventDefault();
        x = (x - 1 + $shirt.length) % $shirt.length;
        $shirt.hide().eq(x).show();
        $(".year").removeClass("yearActive").eq(x).addClass("yearActive");
    });

    $("a.down").on('click', function (e) {
        e.preventDefault();
        x = (x + 1) % $shirt.length;
        $shirt.hide().eq(x).show();
        $(".year").removeClass("yearActive").eq(x).addClass("yearActive");

    });

    $("#luk1").on('click', function (e) {
        e.preventDefault();
        $("#alert1").animate({
            right: '-100%'
        }, 750);
    });

    $("#luk2").on('click', function (e) {
        e.preventDefault();
        $("#alert2").animate({
            right: '-100%'
        }, 750);
    });
    
     $("#luk3").on('click', function (e) {
        e.preventDefault();
        $("#alert3").animate({
            right: '-100%'
        }, 750);
    });

    var $top = $("#person .top");
    var $bottom = $("#person .bottom");
    var $topSave = $("#person-done .top");
    var $bottomSave = $("#person-done .bottom");
    var x = 0;

    $("a.top-left").on('click', function (e) {
        e.preventDefault();
        x = (x - 1 + $top.length) % $top.length;
        $top.hide().eq(x).show();
        $topSave.hide().eq(x).show();
    });

    $("a.top-right").on('click', function (e) {
        e.preventDefault();
        x = (x + 1) % $top.length;
        $top.hide().eq(x).show();
        $topSave.hide().eq(x).show();
    });

    $("a.bottom-left").on('click', function (e) {
        e.preventDefault();
        x = (x - 1 + $bottom.length) % $bottom.length;
        $bottom.hide().eq(x).show();
        $bottomSave.hide().eq(x).show();
    });

    $("a.bottom-right").on('click', function (e) {
        e.preventDefault();
        x = (x + 1) % $bottom.length;
        $bottom.hide().eq(x).show();
        $bottomSave.hide().eq(x).show();
    });


});
