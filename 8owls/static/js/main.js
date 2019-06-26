$(document).ready(function () {
    svg4everybody({});

    // modal
    var overlay = $('#overlay');
    function openModal(modal) {
        overlay.fadeIn(400, function () {
            $(modal)
                .css('display', 'block')
                .animate({ opacity: 1 }, 200);
        });
    };

    function closeModal(modal) {
        $(modal)
            .animate({ opacity: 0 }, 200, function () {
                $(this).hide();
                overlay.fadeOut(400);
            });
    };

    $('.room-reservation__btn').on('click', function () {
        openModal('#modal--registration');
    });

    // esc press
    $(document).keydown(function (e) {
        if (e.keyCode === 27)
            closeModal('.modal');
    });

    //phone
    function validatePhone(phone) {
        var strPhone = phone.trim().replace(/\D+/g, ''); 
        console.log(strPhone)
        if (parseInt(strPhone - 0)) {
            return (strPhone.length == 11 && (strPhone.substring(0, 2) == "89" || strPhone.substring(0, 2) == "79")) ? true : false;
        } else {
            false;
        }
    }
    overlay.on("click", function () {
        closeModal('#modal--registration');
        closeModal('#modal--description');
    });

    $('.callback-form').on('submit', function (e) {
        e.preventDefault();

        var phone = $(this).find('[name=phone]').val();

        if (validatePhone(phone)) {
            var formData = $(this).serialize();
            openModal('#modal--description');
            $(".input-phone").removeClass('err');
            $(".input-phone").addClass('correct').css('color', 'black').css("border", "0px");
        }
        else {
            $(".input-phone").addClass('err').css('color', '#B22222').css("border", "1.5px solid #B22222");
        }
    });

    $('#close').on("click", function () {
        closeModal('#modal--registration');
        closeModal('#modal--description');
    });
});

//slick-slider
$(document).ready(function ($) {
    $('.slider-questions').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<svg class="questions_arrow-left"><use xlink:href="#arrow-left"></use></svg>',
        nextArrow: '<svg class="questions_arrow-right"><use xlink:href="#arrow-right"></use></svg>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                }
            }]
    });
    $('.slider-landmarks').slick({
        arrows: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<svg class="landmark_arrow-left"><use xlink:href="#arrow-left"></use></svg>',
        nextArrow: '<svg class="landmark_arrow-right"><use xlink:href="#arrow-right"></use></svg>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 785,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
    });
    let slider_room = {
        arrows: false,
        infinite: false,
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    function slider_nav(sliderRoom) {
        return {
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: sliderRoom,
            lazyLoad: 'ondemand',
            focusOnSelect: true,
            centerMode: true,
            centerPadding: true,
            prevArrow: '<svg class="room_arrow-left"><use xlink:href="#arrow-left"></use></svg>',
            nextArrow: '<svg class="room_arrow-right"><use xlink:href="#arrow-right"></use></svg>',
        }
    }
    $('.slider-comfort-room').slick(slider_room);
    $('.slider-comfort-nav').slick(slider_nav('.slider-comfort-room'));

    $('.slider-family-room').slick(slider_room);
    $('.slider-family-nav').slick(slider_nav('.slider-family-room'));

    $('.slider-lux-room').slick(slider_room);
    $('.slider-lux-nav').slick(slider_nav('.slider-lux-room'));

    $('.slider-double-room').slick(slider_room);
    $('.slider-double-nav').slick(slider_nav('.slider-double-room'));

    $('.slider-triple-room').slick(slider_room);
    $('.slider-triple-nav').slick(slider_nav('.slider-triple-room'));

    //movable menu
    $('.nav').addClass('original').clone().insertAfter('.nav').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();
    scrollIntervalID = setInterval(stickIt, 10);
    function stickIt() {
        var orgElementPos = $('.original').offset();
        orgElementTop = orgElementPos.top;

        if ($(window).scrollTop() >= (orgElementTop)) {
            orgElement = $('.original');
            coordsOrgElement = orgElement.offset();
            leftOrgElement = coordsOrgElement.left;
            widthOrgElement = orgElement.css('width');
            $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
            $('.original').css('visibility', 'hidden');
        } else {
            $('.cloned').hide();
            $('.original').css('visibility', 'visible');
        }
    }
    stickIt();

    //active link menu
    $(function () {
        $('.menu li>a').each(function () {
            var location = window.location.href;
            var link = this.href;
            if (location == link) {
                var numElem = link.indexOf("#");
                if (numElem != -1) {
                    str = link.substring(22, numElem);
                    $("[href='" + str + "']").addClass('active').css('color', '#F7E6C4');
                } else {
                    $(this).addClass('active').css('color', '#F7E6C4');
                }
            }
        });
    });
    
    //vk group
    $(function () {
         var location = window.location.href.indexOf("contacts")
        if (location != -1) {
            VK.Widgets.Group("vk_groups", { mode: 1 }, 170038138)
        }
    });

});
