AOS.init();

$(".search-btn").click(function () {
    $(".search-bar").toggle("slide");
});

$(".font-btn").click(function (e) {
    filterfonts(e);
});

window.addEventListener('scroll', (event) => {
    let scrollY = this.scrollY;
    if (scrollY > 20) {
        $("header").addClass("add-fixed")
    } else {
        $("header").removeClass("add-fixed")
    }
});

function filterfonts(e) {
    e.preventDefault();
    let event = e.currentTarget.dataset.event;
    let fonts = e.currentTarget.dataset.fontsize;
    switch (fonts) {
        case "-2":
            if (event == "increase") {
                $(".font-btn").attr("data-fontsize", "-1");
                changefonts(".9em");
            }
            break;
        case "-1":
            if (event == "increase") {
                $(".font-btn").attr("data-fontsize", "0");
                changefonts("1em");
            } else if (event == "reduce") {
                $(".font-btn").attr("data-fontsize", "-2");
                changefonts(".8em");
            }
            break;
        case "0":
            if (event == "increase") {
                $(".font-btn").attr("data-fontsize", "1");
                changefonts("1.1em");
            } else if (event == "reduce") {
                $(".font-btn").attr("data-fontsize", "-1");
                changefonts(".9em");
            }
            break;
        case "1":
            if (event == "increase") {
                $(".font-btn").attr("data-fontsize", "2");
                changefonts("1.1em");
            } else if (event == "reduce") {
                $(".font-btn").attr("data-fontsize", "-1");
                changefonts(".9em");
            }
            break;
        case "2":
            if (event == "reduce") {
                $(".font-btn").attr("data-fontsize", "1");
                changefonts("1.1em");
            }
            break;
    }
}

function changefonts(fontsize) {
    $("html").css("font-size", fontsize);
}

let typed = new Typed('.banner-title', {
    strings: ['一站式網頁設計，助您跨足線上', '「無論是企業品牌官網還是電子商務平台，我們的專業團隊能夠提供量身訂製的設計和技術解決方案，助您輕鬆掌握線上市場。」'],
    typeSpeed: 100,
    showCursor: false,
});

$(".contact-btn").on('click keydown', function(e) {
    if (e.type == "keydown" && e.originalEvent.key !== "Enter") {
        return;
    } else {
        $(".contact-btn").each(function() {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        let elshow = $(this)[0].dataset.tab;
        $(".tabs").each(function() {
            $(this).hide();
        });
        $("."+elshow).show();
    }
});

$(".address-btn").on('click keydown', function(e) {
    if (e.type == "keydown" && e.originalEvent.key !== "Enter") {
        return;
    } else {
        $(".address-btn").each(function() {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        let elshow = $(this)[0].dataset.method;
        $(".methods").each(function() {
            $(this).hide();
        });
        $("."+elshow).show();
        
    }
});

$(".top").click(function() {
    $("html, body").animate({ scrollTop: 0, }, 600)
});
