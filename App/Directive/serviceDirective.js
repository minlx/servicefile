app.directive("serviceDirective", function ($timeout) {
    return {
        restrict: "EA",
        templateUrl: "App/View/template/_service.html",
        link: function (scope, ele, attr, controller) {
            var swiper = new Swiper(".container", {
                autoplay: 1000,
                loop: true,
                pagination: ".pagination",
                autoplayDisableOnInteraction: false,
                observer: true
            });
            var everyScr = document.querySelector('.everyScr');
            var everyScrLen = everyScr.querySelectorAll("li").length;
            var everyScrW = everyScr.querySelectorAll("li")[0].offsetWidth;
            everyScr.style.width = everyScrW * everyScrLen + everyScrLen * 20 + "px";

            var saleScroll = new IScroll('#saleScroll', {
                scrollX: true,
                scrollY: false,
                bounce: true
            });

        }
    }
})