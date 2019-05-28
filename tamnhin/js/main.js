$(document).ready(function(){			
	$(".search_main_mobile .btn_search").click(function() {
	    $('.frm_search .txt_search').toggle();
	});

	$('.list_notify').show().marquee({
		//speed in milliseconds of the marquee
		duration: 20000,
		//gap in pixels between the tickers
		gap: 20,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true,
		pauseOnHover:1
	});
	// scroll body to 0px on click
	$('.back_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$(".button_menu_mobile").click(function() {
	    $('.shadown_menu').toggleClass('active');
	    $('.menu_left_mobile').toggleClass('active');
	    $('.button_menu_mobile').toggleClass('active');

	});

	$(".shadown_menu").click(function() {
	    $('.shadown_menu').removeClass('active');
	    $('.menu_left_mobile').removeClass('active');
	    $('.button_menu_mobile').removeClass('active');

	});

	$('.slider_right').slick({
		slidesToShow: 1,
	    slidesToScroll: 1,
	    dots: false,
	    speed: 700,
	    focusOnSelect: true,
	    infinite: true,
	});
	$('.slider_1').slick({
		slidesToShow: 1,
	    slidesToScroll: 1,
	    dots: true,
	    speed: 700,
	    focusOnSelect: true,
	    infinite: true,
	});
	$('.slider_2').slick({
		slidesToShow: 2,
	    slidesToScroll: 1,
	    dots: true,
	    rightMode: true,
	    speed: 700,
	    focusOnSelect: true,
	    infinite: true,
	});
	$('.slider_3').slick({
		slidesToShow: 4,
	    slidesToScroll: 1,
	    dots: false,
	    rightMode: false,
	    speed: 700,
	    focusOnSelect: true,
	    infinite: true,
	    responsive: [
		    {
		      breakpoint: 414,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 360,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});
	$('.slider_4').slick({
		slidesToShow: 3,
	    slidesToScroll: 1,
	    dots: false,
	    rightMode: true,
	    speed: 700,
	    focusOnSelect: true,
	    infinite: true,
	     responsive: [
		    {
		      breakpoint: 414,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 360,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});
	$('.slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    dots: false,
	    speed: 700,
	    // centerMode: true,
	    focusOnSelect: true,
	    infinite: true,
	    responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 320,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});

	
	$(".share").click(function(){
	  $(this).children('.share_icon').toggle();
	});
	$(".comment span").click(function(){
	  $('.cmt_fb').toggle();
	});

	$(".tab_4_cap .head_news span").click(function(){
	    var type = $(this).attr("type");
	    var attribute = $(".tab_4_cap .tab_news span.active").attr("attribute");

	    $(this).parent().children().removeClass("active");
	    $(this).addClass("active");

	    $('.content_tab_4_cap > .pkg').hide();
	    $('.content_tab_4_cap .'+type+'.'+attribute).show();
	});

	$(".tab_4_cap .tab_news span").click(function(){
	    var attribute = $(this).attr("attribute");
	    var type = $(".tab_4_cap .head_news span.active").attr("type");

	    $(this).parent().children().removeClass("active");
	    $(this).addClass("active");

	    $('.content_tab_4_cap > .pkg').hide();
	    $('.content_tab_4_cap .'+type+'.'+attribute).show();
	});

	$(".dir").click(function(){
        var dir = $(this).attr("dir");

        var type = $(".tab_4_cap .head_news span.active").attr("type");
        var attribute = $(".tab_4_cap .tab_news span.active").attr("attribute");

        $('.list_video li').removeClass("active");
        $(this).parent().addClass("active");

        $('.content_tab_4_cap .'+type+'.'+attribute+' .top_video').attr("src",dir);
        return false;
    });

    $(".tab_news_right li a").click(function(){
	    var type = $(this).attr("type");

	    $(this).parent().parent().children().removeClass("active");
	    $(this).parent().addClass("active");

	    $('.content_tab_news_right .docthem').hide();
	    $('.content_tab_news_right .'+type).show();
	    return false;
	});
});


