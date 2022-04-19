// banner slider
$(document).ready(function () {
    $('.banner_img_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
    });

    const slider = document.querySelector('.banner_sec .banner_img_slider')
    const prevBtn = slider.querySelector('.slick-prev')
    const nextBtn = slider.querySelector('.slick-next')

    prevBtn.innerHTML = `<svg viewBox="0 0 443.52 443.52">
    <path
      d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
        c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
        L143.492,221.863z"
    />
  </svg>`
    nextBtn.innerHTML = `<svg style="transform: rotate(180deg)" viewBox="0 0 443.52 443.52">
  <path
    d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
      c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
      L143.492,221.863z"
  />
</svg>`
});

// buyer seller section tabs
function openBuySell(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


// summary slider
$(document).ready(function () {
    $('.summary_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 319,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 424,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }]
    });
});
$(document).ready(function () {
    $('.summary_slider2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false
    });
});

// close google play button on clicked on close button
document.getElementById('close_button').addEventListener('click', function () {
    this.parentNode.style.display = 'none';
});

// counter increment numbers present after banner
$('.count_text').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now) + '+');
        }
    });
});


// view more and view less button in featured nurseries section
$(".less_nursery").click(function () {
    $("#hidden_card").css("display", "none")
    $(".less_nursery").css("display", "none")
    $(".more_nursery").css("display", "initial")
});
$(".more_nursery").click(function () {
    $("#hidden_card").css("display", "contents")
    $(".more_nursery").css("display", "none")
    $(".less_nursery").css("display", "initial")
});

// portal_right

(function () {
    const portal = document.querySelector('.portal_right')
    const introPoint = window.innerHeight / 8

    function toggleClass() {
        if (window.scrollY > introPoint) {
            portal.classList.add('active')
        } else {
            portal.classList.remove('active')
        }
    }

    window.addEventListener('scroll', toggleClass)
})();