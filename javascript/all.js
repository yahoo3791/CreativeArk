$(".search-btn").click(function () {
    $(".search-bar").toggle("slide");
});

$(".font-btn").click(function (e) {
    filterfonts(e);
});

$(".navbar-toggler").click(function(){
    $(".navbar-toggler i").toggleClass("bi-x-lg");
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

$(".top").click(function() {
    $("html, body").animate({ scrollTop: 0, }, 600)
});
