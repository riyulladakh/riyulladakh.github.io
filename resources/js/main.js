$(function() {
    mq_red = "(min-width: 1300px)", mq_orange = "(min-width: 992px) and (max-width: 1299px)", mq_purple = "(max-width: 991px)", mq_yellow = "(min-width: 768px) and (max-width: 991px)", mq_green = "(max-width: 767px)", mq_blue = "(max-width: 479px)", anSp = 500, anSpFast = 400, isMobileNav = !1, mobileNav = "", forms = $("form, .form"), header = $("header"), homeTh = $(".th-img-container"), FullBanner = $(".full-banner"), ParallaxSect = $(".parallax-sect"), bannerTiles = $(".banner-tiles"), HeroBanner = $(".flexslider"), AccordionBox = $(".accordion-style"), GalThTiles = $("#gal-th-tiles"), PressTiles = $(".press-list"), Gallery = $("#GalThumbs"), HrzTabs = $("#hrzTabs"), VertTabs = $("#vertTabs"), checkMQs(), checkFeatures(), $("#WebsitePreloader").slideUp("slow"), header.length && initHeader(), homeTh.length && inithomeTh(), HeroBanner.length && initHeroBanner(), FullBanner.length && initFullBanner(), ParallaxSect.length && initParallaxSect(), bannerTiles.length && initBannerTiles(), AccordionBox.length && initAccordionBox(), GalThTiles.length && initGalThTiles(), PressTiles.length && initPressTiles(), HrzTabs.length && initHrzTabs(), VertTabs.length && initVertTabs()
}), $(window).resize(function() {
    waitForFinalEvent(function() {
        sizeOrientationChange()
    }, 100, "main resize"), adjustMenu(), adjustMenuHov(), adjustFooter(), initFullBanner(), inithomeTh()
}), $(window).load(function() {
    adjustMenu(), adjustMenuHov(), adjustFooter(), initFullBanner(), inithomeTh()
}), window.addEventListener ? window.addEventListener("orientationchange", sizeOrientationChange, !1) : window.attachEvent("orientationchange", sizeOrientationChange), $(".mobile-nav").append("<nav><ul class='mob-menu nav'></ul></nav>"), $("#nav_menu > li").clone().appendTo(".mob-menu"), $("#nav_menu").addClass("hidden-sm"), $(".nav > li > a, .mob-menu > li > a").each(function() {
    $(this).next().length > 0 && $(this).addClass("parent")
}), $(".toggleMenu").click(function(e) {
    e.preventDefault(), $(this).toggleClass("active"), $(".mobile-nav").slideToggle()
}), $(".toggleFooter").click(function(e) {
    e.preventDefault(), $(this).toggleClass("active"), $(".footer-navigation").slideToggle(), equalheight(".equal-heights > ul"), $("html, body").animate({
        scrollTop: $(".toggleFooter").offset().top
    }, "slow")
}), $("html.touch .nav > li > a.parent,.mob-menu > li a.parent").attr({
    href: "javascript:void();"
}), $(".mob-menu > li a.parent").append('<b class="caret"></b>'), $(".mob-menu > li").unbind("mouseenter mouseleave");
var initHeader = function() {
        $(".mob-menu > li a.parent").bind("click", function(e) {
            var i = $(this),
                o = i.parent(),
                t = i.parent().find("ul");
            t.slideToggle(), $(".mob-menu > li ul").not(t).slideUp().removeClass("hover"), $(".mob-menu > li").not(o).removeClass("hover"), $(this).parent("li").toggleClass("hover")
        })
    },
    inithomeTh = function() {
        $(homeTh).find("img").each(function(e, i) {
            var o = $(i),
                t = $(i).attr("class"),
                n = $(i).attr("alt"),
                a = $("<div />").css({
                    background: "url(" + o.attr("src") + ") no-repeat",
                    "background-size": "cover",
                    width: "100%",
                    height: "100%"
                }).addClass(t).attr("title", n);
            o.replaceWith(a)
        })
    },
    initParallaxSect = function(e) {
        $.stellar({
            horizontalScrolling: !1,
            verticalOffset: 0
        })
    },
    initFullBanner = function(e) {
        $(".full-banner").length && ($(".full-banner .owl-wrapper-outer, .full-banner figure, .full-banner figure > img").css({
            "min-height": $(window).height() - $("header").height()
        }), $(".book-widget").css({
            top: $("header").height() + 55
        }))
    };
$("#banner-slider").length && $("#banner-slider").flexslider({
    animation: "slide",
    slideshow: !0,
    animationLoop: !0,
    controlNav: !0,
    pagination: !1,
    directionNav: !0,
    useCSS: !1
}), $(function() {
    $(window).scroll(function() {
        $(this).scrollTop() > 200 ? $(".scroll-down").fadeOut() : $(".scroll-down").fadeIn()
    }), $(".scroll-down").click(function(e) {
        e.preventDefault(), $.scrollTo("#scrollTraget", 500, {
            offset: -150
        })
    })
});
var initHeroBanner = function() {
    $("#main-banner").flexslider({
        animation: "slide",
        slideshow: !0,
        animationLoop: !1,
        controlNav: !0,
        pagination: !1,
        directionNav: !0,
        useCSS: !1,
        start: function() {
            $(".slides li figcaption").addClass("caption-anim")
        },
        before: function(e) {
            $(".slides li figcaption").removeClass("caption-anim")
        },
        after: function(e) {
            $(".slides li.flex-active-slide figcaption").addClass("caption-anim")
        }
    }), $("#main-banner-2").flexslider({
        animation: "slide",
        slideshow: !0,
        animationLoop: !1,
        controlNav: !1,
        pagination: !1,
        directionNav: !0,
        useCSS: !1,
        start: function() {
            $(".slides li figcaption").addClass("caption-anim")
        },
        before: function(e) {
            $(".slides li figcaption").removeClass("caption-anim")
        },
        after: function(e) {
            $(".slides li.flex-active-slide figcaption").addClass("caption-anim")
        }
    }), $("#in-pg-banner").flexslider({
        animation: "slide",
        slideshow: !0,
        animationLoop: !1,
        controlNav: !1,
        directionNav: !0,
        useCSS: !1,
        start: function() {
            $(".slides li figcaption").addClass("caption-anim")
        },
        before: function(e) {
            $(".slides li figcaption").removeClass("caption-anim")
        },
        after: function(e) {
            $(".slides li.flex-active-slide figcaption").addClass("caption-anim")
        }
    }), $("#flexslider-carousel").flexslider({
        animation: "slide",
        slideshow: !0,
        animationLoop: !1,
        controlNav: !1,
        itemWidth: 207,
        itemMargin: 20,
        minItems: 1,
        maxItems: 4,
        directionNav: !0,
        useCSS: !1
    }), $("#flexslider-destination").flexslider({
        animation: "slide",
        slideshow: !0,
        animationLoop: !1,
        controlNav: !1,
        itemWidth: 200,
        itemMargin: 20,
        minItems: 1,
        maxItems: 4,
        directionNav: !0,
        useCSS: !1
    }), $("#th-gallery-carousel").flexslider({
        animation: "slide",
        slideshow: !1,
        animationLoop: !1,
        controlNav: !1,
        itemWidth: 210,
        itemMargin: 16,
        minItems: 1,
        maxItems: 4,
        directionNav: !0,
        useCSS: !1
    })
};

function initBannerTiles() {
    $(".banner-tiles div figure").fitc({
        fit: !0,
        before: function(e) {},
        complete: function(e) {}
    })
}
$(window).bind("orientationchange", function() {
    mainFlexslider.resize()
});
var adjustMenu = function() {
    var e = $("#nav_overlay");
    Modernizr.mq(mq_purple) ? ($(".toggleMenu").css("display", "inline-block"), $(".toggleMenu").hasClass("active") ? $(".navbar").show() : $(".navbar").hide(), e.hide()) : ($(".toggleMenu").css("display", "none"), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? ($("#nav_menu  > li > a").bind("touchstart mouseenter"), $("#nav_menu  > li > a").unbind("click").bind("touchstart mouseenter", function() {
        $("#nav_menu  > li").removeClass("hover"), $(this).parent().toggleClass("hover")
    })) : ($("#nav_menu > li").removeClass("hover"), $("#nav_menu > li > a").unbind("click"), $("#nav_menu > li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave touchstart", function() {
        $(this).toggleClass("hover")
    })))
};
$("ul#nav_menu > li:has(ul)").addClass("has-submenu");
var adjustMenuHov = function(e) {
        var i = $("#nav_menu"),
            o = i.find("li.has-submenu"),
            t = (i.find("li.has-submenu > a"), $("#nav_overlay"));
        o.find("ul").hide(), Modernizr.mq(mq_purple) ? t.hide() : (o.bind("touchstart mouseenter", function() {
            var e = $(this);
            e.addClass("slided selected"), e.find("ul").css("z-index", "9999").stop(!0, !0).slideDown(200, function() {
                o.not(e).find("ul").hide(), t.stop(!0, !0).fadeTo(200, .3), e.addClass("hovered"), $("header").addClass("sec-hove")
            })
        }).bind("mouseleave", function() {
            var e = $(this);
            e.removeClass("selected").find("ul").css("z-index", "2").slideUp(200, function() {
                e.removeClass("slided selected"), e.removeClass("hovered"), t.stop(!0, !0).fadeTo(200, 0, function() {
                    $("header").removeClass("sec-hove"), t.hide()
                })
            })
        }), $("#nav_menu li.has-submenu ul").css({
            display: "none"
        }))
    },
    adjustFooter = function() {
        Modernizr.mq(mq_green) ? ($(".toggleFooter").css("display", "block"), $(".toggleFooter").hasClass("active") ? $(".footer-navigation").show() : $(".footer-navigation").hide()) : ($(".toggleFooter").css("display", "none"), $(".footer-navigation").show())
    },
    initAccordionBox = function(e) {
        $(".faqslist dt").click(function() {
            var e = $(this).next("dd");
            $(this).next(e).slideToggle(), $(this).toggleClass("active")
        })
    },
    initGalThTiles = function() {
        $("#gal-th-tiles").freetile(), $("#gal-th-tiles").freetile()
    },
    initPressTiles = function() {},
    initHrzTabs = function() {
        $("#hrzTabs").responsiveTabs({
            startCollapsed: "accordion",
            activate: function() {
                equalheight(".equal-heights > div, .equal-heights > li")
            },
            collapsible: "accordion"
        })
    },
    initVertTabs = function() {
        $("#vertTabs").responsiveTabs({
            startCollapsed: "accordion",
            activate: function() {
                equalheight(".equal-heights > div, .equal-heights > li")
            }
        })
    };

function sizeOrientationChange() {
    checkMQs()
}

function checkMQs() {
    Modernizr.mq("only all") ? (mq_red_check = Modernizr.mq(mq_red), mq_orange_check = Modernizr.mq(mq_orange), mq_yellow_check = Modernizr.mq(mq_yellow), mq_green_check = Modernizr.mq(mq_green), mq_blue_check = Modernizr.mq(mq_blue), mq_purple_check = Modernizr.mq(mq_purple)) : (mq_red_check = !1, mq_orange_check = !0, mq_yellow_check = !1, mq_green_check = !1, mq_blue_check = !1, mq_purple_check = !1)
}

function checkFeatures() {
    touchEnabled = Modernizr.touch, touchEnabled && $("html, body").removeClass("no-touch").addClass("touch-mod"), formPlaceholders = Modernizr.input.placeholder, boxShadows = Modernizr.boxshadow, isIE7 = $("html").hasClass("ie7"), isIE8 = $("html").hasClass("ie8"), forms.length
}
var waitForFinalEvent = function() {
    var e = {};
    return function(i, o, t) {
        t || (t = "Don't call this twice without a uniqueId"), e[t] && clearTimeout(e[t]), e[t] = setTimeout(i, o)
    }
}();

function setLocation(e) {
    window.location.href = e
}
$(".totop").hide(), $(function() {
    $(window).scroll(function() {
        $(this).scrollTop() > 300 ? $(".totop").slideDown() : $(".totop").slideUp()
    }), $(".totop a").click(function(e) {
        e.preventDefault(), $("body,html").animate({
            scrollTop: 0
        }, 500)
    })
}), $(document).ready(function() {
    $("ul#nav_menu li:has(ul)").addClass("has-submenu")
}), modal = $(".modal-dialog"), modal.css({
    "margin-top": ($(window).height() - modal.height()) / 2.5
}), $(".map-link").magnificPopup({
    type: "image",
    closeOnContentClick: !0,
    fixedContentPos: !1,
    fixedBgPos: !1,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
        verticalFit: !0
    },
    gallery: {
        enabled: !1
    }
}), $(".img-popup").magnificPopup({
    type: "image",
    closeOnContentClick: !0,
    fixedContentPos: !1,
    fixedBgPos: !1,
    mainClass: "mfp-img-mobile mfp-with-zoom mfp-img-mobile",
    image: {
        verticalFit: !0
    },
    gallery: {
        enabled: !1
    }
}), $(".iframe-popup").magnificPopup({
    type: "iframe",
    fixedContentPos: !1,
    fixedBgPos: !0,
    overflowY: "auto",
    closeBtnInside: !0,
    preloader: !1,
    midClick: !0,
    removalDelay: 300,
    mainClass: "my-mfp-slide-bottom",
    zoom: {
        enabled: !0,
        duration: 300
    },
    callbacks: {
        ajaxContentAdded: function() {
            initForms()
        }
    }
}), $(".aj-popup").magnificPopup({
    type: "ajax",
    fixedContentPos: !1,
    fixedBgPos: !0,
    overflowY: "auto",
    closeBtnInside: !0,
    preloader: !1,
    midClick: !0,
    removalDelay: 300,
    mainClass: "my-mfp-slide-bottom",
    zoom: {
        enabled: !0,
        duration: 300
    },
    callbacks: {
        ajaxContentAdded: function() {
            initForms()
        }
    }
}), $(".inline-popup").magnificPopup({
    type: "inline",
    fixedContentPos: !1,
    fixedBgPos: !0,
    overflowY: "auto",
    closeBtnInside: !0,
    preloader: !1,
    midClick: !0,
    removalDelay: 300,
    mainClass: "my-mfp-slide-bottom",
    zoom: {
        enabled: !0,
        duration: 300
    },
    callbacks: {
        ajaxContentAdded: function() {
            initForms()
        }
    }
}), $(".pop-up-box").magnificPopup({
    type: "inline",
    removalDelay: 300,
    mainClass: "mfp-fade my-mfp-slide-bottom",
    callbacks: {
        open: function() {
            $(".mfp-content").addClass("bookPopIframe")
        },
        close: function() {
            $(".mfp-content").removeClass("bookPopIframe")
        }
    }
}), $(".book-now-pop").magnificPopup({
    type: "inline",
    removalDelay: 300,
    mainClass: "mfp-fade my-mfp-slide-bottom",
    callbacks: {
        open: function() {
            $(".mfp-content").addClass("bookPopIframe"), equalheight(), $(".book-now-gallery").flexslider({
                animation: "slide",
                animationLoop: !1,
                controlNav: !1,
                directionNav: !0,
                useCSS: !1
            })
        },
        close: function() {
            $(".mfp-content").removeClass("bookPopIframe")
        }
    }
}), $(".popup-gal, .gal-popup").each(function() {
    $(this).magnificPopup({
        delegate: "a",
        type: "image",
        image: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="pull-right"><div class="mfp-counter"></div><div class="mfp-copy">© La Escapade Motors</div></div></div></div>'
        },
        mainClass: "mfp-with-fade",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        titleSrc: "title",
        callbacks: {
            buildControls: function() {
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight))
            }
        }
    })
}), $(".zoom-galview").each(function() {
    $(this).magnificPopup({
        delegate: "a",
        mainClass: "mfp-with-fade press-images",
        type: "image",
        image: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div></figure><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="pull-right"><div class="mfp-counter"></div><div class="mfp-copy">© TUTC</div></div></div></div>'
        },
        gallery: {
            enabled: !0,
            navigateByImgClick: !0
        },
        callbacks: {
            buildControls: function() {
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight))
            },
            imageLoadComplete: function() {
                if ($window.height() < 1e3) {
                    var e = $(".mfp-img").attr("src");
                    $(".mfp-figure figure").zoom({
                        url: e
                    })
                }
            }
        }
    })
}), $(".zoom-jpgview").each(function() {
    $(this).magnificPopup({
        mainClass: "mfp-with-fade",
        type: "image",
        image: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div></figure><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="pull-right"><div class="mfp-counter"></div><div class="mfp-copy">© TUTC</div></div></div></div>'
        },
        callbacks: {
            imageLoadComplete: function() {
                if ($window.height() < 1e3) {
                    var e = $(".mfp-img").attr("src");
                    $(".mfp-figure figure").zoom({
                        url: e
                    })
                }
            }
        }
    })
}), $("img").error(function() {
    $(this).unbind("error").attr("src", "/resources/images/broken-image.jpg")
});
var $window = $(window);
equalheight = function(e) {
    var i, o = 0,
        t = 0,
        n = new Array;
    $(e).each(function() {
        if (i = $(this), $(i).height("auto"), topPostion = i.position().top, t != topPostion) {
            for (currentDiv = 0; currentDiv < n.length; currentDiv++) n[currentDiv].height(o);
            n.length = 0, t = topPostion, o = i.height(), n.push(i)
        } else n.push(i), o = o < i.height() ? i.height() : o;
        for (currentDiv = 0; currentDiv < n.length; currentDiv++) n[currentDiv].height(o)
    })
}, $(window).load(function() {
    equalheight(".equal-heights > div, .equal-heights > li"), $(".newsletter-equal-heights").length && equalheight(".newsletter-equal-heights, .newsletter-equal-heights h2")
}), $(window).resize(function() {
    equalheight(".equal-heights > div, .equal-heights > li"), $(".newsletter-equal-heights").length && equalheight(".newsletter-equal-heights, .newsletter-equal-heights h2")
}), $(".resp-tab-item, .resp-accordion").click(function() {
    equalheight(".equal-heights > div, .equal-heights > li")
}), $(".r-tabs .r-tabs-nav .r-tabs-anchor").click(function(e) {
    e.preventDefault()
}), $(document).ready(function() {
    ww = document.body.clientWidth, ww >= 768 || ($(".shop-cart .boxCont").slideUp(), $(".shop-cart h4").removeClass("active"))
}), $(".shop-cart h4").click(function() {
    document.body.clientWidth < 768 && ($(this).toggleClass("active"), $(this).parent().find(".boxCont").slideToggle())
}), $(window).bind("resize orientationchange", function() {
    ww = document.body.clientWidth, ww >= 768 ? ($(".shop-cart .boxCont").slideDown(), $(".shop-cart h4").addClass("active")) : ($(".shop-cart .boxCont").slideUp(), $(".shop-cart h4").removeClass("active"))
}), $(".collapse-group .collapse").collapse({
    toggle: !1
}), $(".exp-details-btn").on("click", function(e) {
    e.preventDefault();
    var i = $(this);
    i.closest(".collapse-group").find(".collapse").collapse("toggle"), i.find("span").toggleClass("toggle-btn")
}), $(".book-widget h3").on("click", function() {
    $(this).toggleClass("active"), $(this).parent().find(".boxIn").slideToggle()
}), $(window).scroll(function() {
    $(this).scrollTop() > 300 ? $("header").addClass("fixedHeader").addClass("fadeInUp") : $("header").removeClass("fixedHeader").removeClass("fadeInUp")
}), $("p:last-child").addClass("last"), jQuery(window).ready(function() {
    theme.init()
}), jQuery(window).load(function() {
    theme.initAnimation()
});
var theme = {
    onResize: function() {
        resizePage()
    },
    init: function() {
        $(window).scroll(function() {
            $(this).scrollTop() > 10 ? $(".to-top").css({
                bottom: "15px"
            }) : $(".to-top").css({
                bottom: "-100px"
            })
        }), $(".to-top").click(function() {
            return $("html, body").animate({
                scrollTop: "0px"
            }, 800), !1
        })
    },
    initAnimation: function() {
        0 == /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && ($("*[data-animation]").addClass("animated"), $(".animated").waypoint(function(e) {
            var i = $(this),
                o = i.data("animation");
            if (!i.hasClass("visible")) {
                var t = i.data("animation-delay");
                t ? setTimeout(function() {
                    i.addClass(o + " visible")
                }, t) : i.addClass(o + " visible")
            }
        }, {
            offset: $.waypoints("viewportHeight")
        }))
    },
    initGoogleMap: function() {
        var e, i, o = [
            ["Diskit", 34.548504, 77.55621, 2, "/resources/images/map-marker-current.png", 34.548504, 150, 50, "map-label-current", "/chamba-camp-diskit/"],
            ["Thiksey", 34.042256, 77.672224, 3, "/resources/images/map-marker-current.png", 34.042256, 150, 0, "map-label-current", "/chamba-camp-thiksey/"],
            ["Nagaland", 26.158435, 94.562443, 4, "/resources/images/map-marker-current.png", 26.158435, 150, 0, "map-label-current", "/kohima-camp-nagaland/"],
            ["Dudhwa", 28.4694237, 80.5437681, 5, "/resources/images/map-marker-current.png", 28.4694237, 150, 0, "map-label-current", "/jaagir-lodge-dudhwa/"]/*,
            ["Allahabad", 25.425963, 81.899734, 7, "/resources/images/map-marker-upcoming.png", 25.425963, 150, 0, "map-label-current", "/sangam-nivas-camp-allahabad/"]*/
        ];
        new google.maps.InfoWindow, google.maps.event.addDomListener(window, "load", function() {
            var t = {
                center: new google.maps.LatLng(22.1637128, 82.8003806),
                zoom: 5,
                scrollwheel: !1
            };
            e = new google.maps.Map(document.getElementById("map-canvas"), t);
            for (var n = 0; n < o.length; n++) new google.maps.LatLng(o[n][1], o[n][2]), i = new MarkerWithLabel({
                position: new google.maps.LatLng(o[n][1], o[n][2]),
                map: e,
                icon: o[n][4],
                labelContent: o[n][0],
                labelAnchor: new google.maps.Point(o[n][6], o[n][7]),
                labelClass: o[n][8],
                labelStyle: {
                    opacity: .99
                },
                animation: google.maps.Animation.DROP
            }), google.maps.event.addListener(i, "click", function(e, i) {
                return function() {
                    window.location.href = o[i][9]
                }
            }(0, n));
            e.setOptions({
                styles: [{
                    featureType: "landscape",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    stylers: [{
                        hue: "#00aaff"
                    }, {
                        saturation: -100
                    }, {
                        gamma: 2.15
                    }, {
                        lightness: 12
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{
                        visibility: "on"
                    }, {
                        lightness: 24
                    }]
                }, {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{
                        hue: "#e8e9e4"
                    }, {
                        saturation: -78
                    }, {
                        lightness: 67
                    }, {
                        visibility: "simplified"
                    }]
                }]
            })
        })
    },
    initGoogleMapmapChambaHome: function() {
        var e, i, o = [
                ["Leh Ladakh", 34.152998, 77.577006]
            ],
            t = new google.maps.InfoWindow;
        google.maps.event.addDomListener(window, "load", function() {
            var n, a, l = {
                center: new google.maps.LatLng(34.152998, 77.577006),
                zoom: 14,
                scrollwheel: !1,
                panControl: !0,
                mapTypeControl: !1,
                streetViewControl: !1,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                panControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                }
            };
            e = new google.maps.Map(document.getElementById("map-canvas-chambahome"), l);
            for (var s = 0; s < o.length; s++) new google.maps.LatLng(o[s][1], o[s][2]), i = new MarkerWithLabel({
                position: new google.maps.LatLng(o[s][1], o[s][2]),
                map: e,
                icon: "/resources/images/map-marker-default.png",
                animation: google.maps.Animation.DROP
            });
            google.maps.event.addListener(i, "click", (n = i, a = s, function() {
                t.setContent(o[a][0]), t.open(e, n)
            }))
        })
    },
    initGoogleMapmapChamba: function() {
        var e, i, o = [
                ["Leh Ladakh", 34.042256, 77.672224]
            ],
            t = new google.maps.InfoWindow;
        google.maps.event.addDomListener(window, "load", function() {
            var n, a, l = {
                center: new google.maps.LatLng(34.042256, 77.672224),
                zoom: 14,
                scrollwheel: !1,
                panControl: !0,
                mapTypeControl: !1,
                streetViewControl: !1,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                panControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                }
            };
            e = new google.maps.Map(document.getElementById("map-canvas-kohimahome"), l);
            for (var s = 0; s < o.length; s++) new google.maps.LatLng(o[s][1], o[s][2]), i = new MarkerWithLabel({
                position: new google.maps.LatLng(o[s][1], o[s][2]),
                map: e,
                icon: "/resources/images/map-marker-default.png",
                animation: google.maps.Animation.DROP
            });
            google.maps.event.addListener(i, "click", (n = i, a = s, function() {
                t.setContent(o[a][0]), t.open(e, n)
            }))
        })
    },
    initGoogleMapmapKohima: function() {
        var e, i, o = [
                ["Kohima Camp Nagaland", 25.659473, 94.104574]
            ],
            t = new google.maps.InfoWindow;
        google.maps.event.addDomListener(window, "load", function() {
            var n, a, l = {
                center: new google.maps.LatLng(25.659473, 94.104574),
                zoom: 14,
                scrollwheel: !1,
                panControl: !0,
                mapTypeControl: !1,
                streetViewControl: !1,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                panControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                }
            };
            e = new google.maps.Map(document.getElementById("map-canvas-kohimahome"), l);
            for (var s = 0; s < o.length; s++) new google.maps.LatLng(o[s][1], o[s][2]), i = new MarkerWithLabel({
                position: new google.maps.LatLng(o[s][1], o[s][2]),
                map: e,
                icon: "/resources/images/map-marker-default.png",
                animation: google.maps.Animation.DROP
            });
            google.maps.event.addListener(i, "click", (n = i, a = s, function() {
                t.setContent(o[a][0]), t.open(e, n)
            }))
        })
    },
    initGoogleMapmapDiskit: function() {
        var e, i, o = [
                ["Kohima Camp Nagaland", 34.548504, 77.55621]
            ],
            t = new google.maps.InfoWindow;
        google.maps.event.addDomListener(window, "load", function() {
            var n, a, l = {
                center: new google.maps.LatLng(34.548504, 77.55621),
                zoom: 14,
                scrollwheel: !1,
                panControl: !0,
                mapTypeControl: !1,
                streetViewControl: !1,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                panControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                }
            };
            e = new google.maps.Map(document.getElementById("map-canvas-kohimahome"), l);
            for (var s = 0; s < o.length; s++) new google.maps.LatLng(o[s][1], o[s][2]), i = new MarkerWithLabel({
                position: new google.maps.LatLng(o[s][1], o[s][2]),
                map: e,
                icon: "/resources/images/map-marker-default.png",
                animation: google.maps.Animation.DROP
            });
            google.maps.event.addListener(i, "click", (n = i, a = s, function() {
                t.setContent(o[a][0]), t.open(e, n)
            }))
        })
    },
    initGoogleMapDudhwa: function() {
        var e, i, o = [
                ["Jaair Lodge Dudhwa", 28.504025, 80.510901]
            ],
            t = new google.maps.InfoWindow;
        google.maps.event.addDomListener(window, "load", function() {
            var n, a, l = {
                center: new google.maps.LatLng(28.504025, 80.510901),
                zoom: 15,
                scrollwheel: !1,
                panControl: !0,
                mapTypeControl: !1,
                streetViewControl: !1,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                panControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                }
            };
            e = new google.maps.Map(document.getElementById("map-canvas-dudhwa"), l);
            for (var s = 0; s < o.length; s++) new google.maps.LatLng(o[s][1], o[s][2]), i = new MarkerWithLabel({
                position: new google.maps.LatLng(o[s][1], o[s][2]),
                map: e,
                icon: "/resources/images/map-marker-default.png",
                animation: google.maps.Animation.DROP
            });
            google.maps.event.addListener(i, "click", (n = i, a = s, function() {
                t.setContent(o[a][0]), t.open(e, n)
            }))
        })
    }
};
$(document).ready(function() {
    $(".radio .styled-radio-checked").parent().addClass("selected"), $(".radio input").on("ifChanged", function() {
        $(this).parent().parent().toggleClass("selected")
    })
});
var initGallery = function() {
    $("#GalThumbs").carouFredSel({
        synchronise: ["#GalImages", !1, !0],
        direction: "up",
        auto: !1,
        items: {
            visible: 4,
            start: 0
        },
        scroll: {
            items: 1,
            onBefore: function(e) {
                e.items.old.eq(0).removeClass("selected"), e.items.visible.eq(0).addClass("selected")
            }
        },
        prev: "#prev",
        next: "#next"
    }), $("#GalImages").carouFredSel({
        auto: !1,
        items: 1,
        scroll: {
            fx: "fade",
            items: 0,
            duration: 500
        },
        responsive: !0,
        prev: "#prev-main",
        next: "#next-main"
    }), $("#GalThumbs li").click(function() {
        $("#GalThumbs").trigger("slideTo", [this])
    }), $("#GalThumbs li:eq(0)").addClass("selected"), $("#next-main").click(function() {
        $("#GalThumbs").trigger("next")
    }), $("#prev-main").click(function() {
        $("#GalThumbs").trigger("prev")
    })
};
$("#flexslider-carousel-2").flexslider({
    animation: "slide",
    slideshow: !0,
    animationLoop: !1,
    controlNav: !1,
    itemWidth: 270,
    itemMargin: 20,
    minItems: 1,
    maxItems: 3,
    directionNav: !0,
    useCSS: !1
}), $(".collapse-group .collapse").collapse({
    toggle: !1
}), $(".details-btn").on("click", function(e) {
    e.preventDefault();
    var i = $(this);
    i.closest(".collapse-group").find(".collapse").collapse("toggle"), i.find("span").toggleClass("toggle-btn")
}), $(".popup").magnificPopup({
    type: "iframe",
    fixedContentPos: !1,
    fixedBgPos: !0,
    overflowY: "auto",
    closeBtnInside: !0,
    preloader: !1,
    midClick: !0,
    removalDelay: 300,
    mainClass: "my-mfp-slide-bottom",
    zoom: {
        enabled: !0,
        duration: 300
    },
    callbacks: {
        ajaxContentAdded: function() {
            initForms()
        }
    }
}), $(".btn-popup").magnificPopup({
    type: "inline",
    fixedContentPos: !1,
    fixedBgPos: !0,
    overflowY: "auto",
    closeBtnInside: !0,
    preloader: !1,
    midClick: !0,
    removalDelay: 300,
    mainClass: "my-mfp-slide-bottom",
    zoom: {
        enabled: !0,
        duration: 300
    },
    callbacks: {
        ajaxContentAdded: function() {
            initForms()
        }
    }
}), $("tr:last-child, td:last-child, .nav li:last-child, .additional-links li:last-child, .sidebar-links li:last-child, .footer-navigation > ul:last-child, .footer .additional-links li:last-child, .th-img-container .image-desc p:last-child, .booking-sel-des li:last-child, .booking-more-row ul li:last-child, .ext-pax-mapping .pax-tbl ul li:last-child, .radio-check-btn-tbl ul li:last-child, .filter li:last-child, .options-list:last-child, .options-list li:last-child, .pax-tbl ul li:last-child, .book-ext-sect li:last-child").addClass("last"), $(".full-wt-bg-row.pre-tour ul > li:last-child").addClass("last-custome"), $(".resp-vtabs li:last-child, .booking-flow p:last-child").removeClass("last"), $(".more-roomtypes").click(function() {
    $(this).closest(".itnry-com-row").find(".other-pkgs").show(), $(this).closest(".itnry-com-row").find(".room-type-box").hasClass("default-pkg") ? ($(this).closest(".itnry-com-row").find(".more-roomtypes").find("i").addClass("icon-angle-down"), $(this).closest(".itnry-com-row").find(".room-type-box").slideDown(), $(this).closest(".itnry-com-row").find(".room-type-box").removeClass("default-pkg")) : ($(this).closest(".itnry-com-row").find(".more-roomtypes").find("i").toggleClass("icon-angle-down"), $(this).closest(".itnry-com-row").find(".room-type-box").slideToggle())
}), $(".select-pkg").click(function() {
    $(this).closest(".itnry-com-row").find(".room-type-box").addClass("default-pkg").slideToggle()
}), $(".more-opt").click(function(e) {
    e.preventDefault(), $(this).toggleClass("active"), $(".more-opt-links").fadeToggle("fast")
}), $(function() {
    $(window).scroll(function() {
        $(this).scrollTop() > 200 ? $(".scroll-down").fadeOut() : $(".scroll-down").fadeIn()
    }), $(".scroll-down").click(function(e) {
        e.preventDefault(), $.scrollTo("#scrollTraget", 500, {
            offset: -150
        })
    })
}), $("#campsMenu").hover(function(e) {
    $(this).find(".dropdown-menu").stop(!0, !0).slideDown(200)
}, function(e) {
    $(this).find(".dropdown-menu").stop(!0, !0).slideUp(200)
}), $(".experience-head > li a").click(function(e) {
    e.preventDefault(), $(".experience-head > li a").removeClass("active"), $(this).addClass("active");
    var i = $(this).attr("data-label");
    $(".experience-content > li").hide(), $(".tab-" + i + "-section").show()
}), $(".itinerary-details.trips label").click(function(e) {
    $(".itinerary-details.trips .price-wrap").removeClass("active"), $(this).parent().find(".price-wrap").addClass("active")
}), $(".lodge select.number").change(function() {
    var e = $(this).val();
    lodgeFunction(e)
});
var lodgeFunction = function(e) {
    $(".room-type").show(), $(".adult-child").show()
};
$(".room-type select.type").change(function() {
    var e = $(this).val();
    roomTypeFunction(e)
});
var roomTypeFunction = function(e) {
    $(".pax").show()
};
$(".type .icon-link").click(function(e) {
    e.preventDefault(), $(".type-options").slideDown(), $(this).parents(".type").find(".icon-link").addClass("active")
}), $(".type-options li").click(function(e) {
    var i = $(this).attr("data-label");
    $(this).parents(".type-options").hide(), $(".type-options li").removeClass("selected"), $(this).addClass("selected"), $(this).parents(".type").find(".value").text(i), $(this).parents(".type").find(".icon-link").removeClass("active")
}), $(document).click(function(e) {
    var i = e.target;
    $(i).is(".type") || $(i).parents().is(".type") || $(".type-options").hide()
}), $(document).ready(function() {
    var e = $("#slider-three"),
        i = $("#StatusNumThree");
    e.owlCarousel({
        navigation: !1,
        pagination: !1,
        singleItem: !0,
        mouseDrag: !1,
        rewindNav: !1,
        afterAction: function() {
            if (this.itemsAmount > this.visibleItems.length) {
                t = ".owlItems", n = this.owl.owlItems.length - this.owl.currentItem - 1, i.find(t).find(".result").text(n);
                var e = $("#next-three"),
                    o = $("#prev-three");
                $(e).show(), $(o).show(), $("#StatusNumThree").show(), 
				0 == this.currentItem && ($(o).hide(), $(".book-camp").show(), $(".byl").hide(), $(".byc").show()), 	 
				1 == this.currentItem && ($(".byc").show(), $(".book-camp").show(), $(".byl").hide()),
                2 == this.currentItem && ($(".byc").hide(), $(".book-camp").show(), $(".byl").show()), 				
				3 == this.currentItem && ($(".byc").show(), $(".book-camp").show(), $(".byl").hide()), 
				4 == this.currentItem && ($(".byc").show(), $(".book-camp").show(), $(".byl").hide()), 
				this.currentItem == this.maximumItem && ($(e).hide(), $("#StatusNumThree").hide())
            } else $(e).hide(), $(o).hide();
            var t, n
            
            
			if ( this.itemsAmount == 1 ) {
		$(".owl-carousel").addClass("single-slide");
                
        }
        }
    }), $("#next-three").click(function() {
        e.trigger("owl.next")
    }), $("#prev-three").click(function() {
        e.trigger("owl.prev")
    })
}), $(document).delegate(".price-div > .sharing > .default > a", "click", function(e) {
    e.preventDefault(), $(this).parents(".price-div").find(".share-other").toggle()
}), $(document).delegate(".share-other > ul > li > a", "click", function(e) {
    e.preventDefault(), $(this).parents(".price-div").find(".share-other").hide()
}), $("body").click(function(e) {
    "sharing" !== e.target.className && $(".share-other").hide()
}), $(document).on("click", ".share-tooltip a", function(e) {
    e.preventDefault(), $(".share-tooltip a, .tool-tip.info a").removeClass("active"), $(".share-collapse, .tooltip-cont").hide(), $(".pkg-listing.list-view > li").css({
        "z-index": "unset"
    }), $(this).parents("li").css({
        "z-index": "1000"
    }), $(this).parent().find(".share-collapse").show(), $(this).parents(".container").offset().left, $(this).parents(".container").outerWidth(), $(this).closest(".share-tooltip").children(".share-collapse").offset().left, $(this).closest(".share-tooltip").children(".share-collapse").outerWidth(), $(this).toggleClass("active")
}), $(".tab-theme-01 > .tab-head > li a").click(function(e) {
    e.preventDefault(), $(".tab-theme-01 > .tab-head > li a").removeClass("active"), $(this).addClass("active");
    var i = $(this).attr("data-label");
    $(this).closest(".tab-theme-01").find(".tab-content > li").hide(), $(".content-" + i + "-section").show()
});
$(".yr-tbs > a").click(function(e){
		e.preventDefault()
		$(".yr-tbs > a").removeClass("active");
		$(this).addClass("active");
		var cur_yr = $(this).attr("title");
		$(".calendar-wrapper").hide();
		$(".yr-" + cur_yr ).css({'display':'block'});
		equalheight('.equal-heights > div, .equal-heights > li');
	});
	
$(".pkg-list").owlCarousel({loop:true,items:4,margin:0,navigation:true,drag:false,itemMargin:10,pagination:false,navigationText :[ , ],responsive:{0:{items:1},600:{items:1},1000:{items:1}}});
	
/* 17Oct2018 : Starts */
$(".gallery-tbs > a").click(function(e){
		e.preventDefault()
		$(".gallery-tbs > a").removeClass("active");
		$(this).addClass("active");
		var cur_gal = $(this).attr("title");
		if(cur_gal == 'Video-Gallery'){
			$(".filter-video").css({'display':'block'});
		}else if(cur_gal == 'Photo-Gallery'){
			$(".filter-video").css({'display':'none'});
		}else{
			$(".filter-video").css({'display':'none'});
		}
		$(".calendar-wrapper").hide();
		$(".gallery-" + cur_gal ).css({'display':'block'});
		equalheight('.equal-heights > div, .equal-heights > li');
	});

$('.popup-iframe').magnificPopup({
                type: 'iframe',
                fixedContentPos: true,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
}); 

	
/* 17Oct2018 : Starts */