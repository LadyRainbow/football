$(document).ready(function () {
    var $window = $(window);
    var windowHeight = $window.height();
    var windowWidth = $window.width();
    var $header = $('header');

    var $burger = $('.burger-wrp');

    var $popUpGeneralBlock = $('.pop-up-general-block');

    var $overlayPopUpWRP = $('.pop-up-overlay-wrapper');
    var $overlay = $('.overlay-pop-up');
    var $closePopUpBtn = $('.pop-up-general-block-close-btn');

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    // open/close search


    $('.search-general').click(function () {
        if (windowWidth > 767) {
            $('.search-btn').parent().addClass('open');
        } else {
            $('.search').fadeIn();
        }
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".input-search-wrp"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('open');
            div.removeClass('open-result');
            $('.search-input-result').removeClass('search-input-result-show');  // скрываем его
		}
	});
    $('.search-input-close').click(function () {
        $(".input-search-wrp").removeClass('open');
        $('.input-search-wrp').removeClass('open-result');
        $('.search-input-result').removeClass('search-input-result-show');
    });


    $('.search-input').focus(function () {
        $('.input-search-wrp').addClass('open-result');
        $('.search-input-result').addClass('search-input-result-show');
    });
    // open/close search END

    // open/close search mob
    $('.search-input-mob').focus(function () {
        $('.search-input-result-mob').addClass('search-input-result-show');
    });

    $('.btn-mob-search-close').click(function () {
        $('.search').fadeOut();
        $('.search-input-result-mob').removeClass('search-input-result-show');
    });
    // open/close search mob END

    // menu
    $('.burger').click(function () {
        $('.menu').toggleClass('active');
        $('header').toggleClass('active');
        $(this).toggleClass('active');
        $('body').toggleClass('active');
    });

    // accordion init
      $('li.sub1 > a').click(function(){
           if($(this).hasClass('active')) {
               $('li.sub1 ul').slideUp();
                if ($(this).next().is(":visible")){
                    $(this).next().slideUp();
                } else {
                    $(this).next().slideToggle();
                }
                $('li.sub1 a').removeClass('active');
                $(this).removeClass('active');
                return false;
           }
           else {
               $('li.sub1 ul').slideUp();
                if ($(this).next().is(":visible")){
                    $(this).next().slideUp();
                } else {
                    $(this).next().slideToggle();
                }
                $('li.sub1 a').removeClass('active');
                $(this).addClass('active');
                return false;
           }
      });
      $('li.sub2 > a').click(function(){
           if($(this).hasClass('active')) {
               $('li.sub2 ul').slideUp();
                if ($(this).next().is(":visible")){
                    $(this).next().slideUp();
                } else {
                    $(this).next().slideToggle();
                }
                $('li.sub2 a').removeClass('active');
                $(this).removeClass('active');
                return false;
           }
           else {
               $('li.sub2 ul').slideUp();
                if ($(this).next().is(":visible")){
                    $(this).next().slideUp();
                } else {
                    $(this).next().slideToggle();
                }
                $('li.sub2 a').removeClass('active');
                $(this).addClass('active');
                return false;
           }
      });
      $('li.sub3 > a').click(function(){
           if($(this).hasClass('active')) {
               $('li.sub3 ul').slideUp();
                if ($(this).next().is(":visible")){
                    $(this).next().slideUp();
                } else {
                    $(this).next().slideToggle();
                }
                $('li.sub3 a').removeClass('active');
                $(this).removeClass('active');
                return false;
           }
           else {
               $('li.sub3 ul').slideUp();
                if ($(this).next().is(":visible")){
                    $(this).next().slideUp();
                } else {
                    $(this).next().slideToggle();
                }
                $('li.sub3 a').removeClass('active');
                $(this).addClass('active');
                return false;
           }
      });

      // $('h3.main-title').click(function () {
      //     if($(this).hasClass('ui-accordion-header-active')) {
      //         $('.inner-list li ul').slideUp();
      //         $('.inner-list li a').removeClass('active');
      //         $('li.sub2 ul').slideUp();
      //         $('li.sub2 a').removeClass('active');
      //     }
      // });


        // $(".accordian h3 a").not( ".nolink" ).click(function() {
        //       window.location = $(this).attr('href');
        //       return false;
        //    });



    // SLIDER PRODUCT
    $('.main-slider1').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         dots: false,
         asNavFor: '.main-slider2',
         focusOnSelect: false
    });
    $('.main-slider2').slick({
         slidesToShow: 2,
         slidesToScroll: 1,
         asNavFor: '.main-slider1',
         dots: false,
         prevArrow: $('.prev-main-block'),
         nextArrow: $('.next-main-block'),
         responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },
         ]
    });

   // magazine cut string
    function cutText () {
        $(".main-slide2-text").text(function(i, text) {
         if (text.length >= 55) {
           text = text.substring(0, 55);
           var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
           text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
         }
         $(this).text(text);
       });
   };
   cutText ();

   // slider 2 main block
   $('.match-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.prev-match-arrow'),
        nextArrow: $('.next-match-arrow'),
        responsive: [
                       {
                           breakpoint: 1200,
                           settings: {
                               slidesToShow: 2,
                               slidesToScroll: 1
                           }
                       },
                       {
                           breakpoint: 992,
                           settings: {
                               slidesToShow: 1,
                               slidesToScroll: 1
                           }
                       },
        ]
   });

   // show table
   $('.all-table-btn').click(function () {
       $('.table-main-section table').addClass('show');
       $(this).addClass('hide');
   });

   // decor scroll
   if(windowWidth > 767) {
       $('.prev-trans-vidos').mCustomScrollbar();
   };

   // translyatcia vidos
   $('.prev-trans-block').click(function (e) {
       e.preventDefault();
       $('.prev-trans-block').removeClass('active');
       $(this).addClass('active');
       var href = $(this).attr('href');
       var img = $(this).find('img').attr('src');
       var text = $(this).find('.trans-vidos-name').text();
       $('.main-video-block').attr('href', href);
       $('.main-trans-vidos-img').attr('src', img);
       $('.main-trans-vidos .vidos-name').text(text);
   });


   // select
   $('.select-custom option').each(function (index, element) {
       $(element).attr('value', index);
   });

   $(".select-custom").selectize({
        onChange: function(value) {
            $('.number-player span').removeClass('show');
            $('.number-player').find("[data-value='" + value + "']").addClass('show');
            $('.best-player-img img').removeClass('show');
            $('.best-player-img').find("[data-value='" + value + "']").addClass('show');
        }
   });

   $('.best-player-img img').each(function (index, element) {
       $(element).attr('data-value', index);
   });
   $('.number-player span').each(function (index, element) {
       $(element).attr('data-value', index);
   });


   $('.selectize-input input').attr('readonly','readonly');



    // soft scroll
    $(".scrollTo").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        // анимируем переход к блоку, время: 500 мс
        $('body,html').animate({scrollTop: top}, 500);
        // находим высоту, на которой расположен блок
    });

    $(".scrollToMinusHeader").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top - 70;
        $('body,html').animate({scrollTop: top}, 500);
    });

    function headerChange () {
        if($window.scrollTop() > 50) {
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    };
    headerChange ();
    $window.scroll(function () {
        headerChange ();
    });


    // only number
    $(".input-number").keypress(function(event){
      event = event || window.event;
      if (event.charCode && event.charCode!=0 && event.charCode!=8 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
        return false;
    });

    // masked
    $('.mask-phone').mask('+7 (999) 99-99-99');






    // form checked
    $('.checkbox-check').change(function() {
       if(this.checked) {
           $(this).closest('form').find('.btn-4-checkbox').removeClass('btn-4-checkbox-disabled');
       }
       else {
           $(this).closest('form').find('.btn-4-checkbox').addClass('btn-4-checkbox-disabled');
       }
   });


   // datepicker calendar
   /* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
   $.datepicker.regional.ru = {
       closeText: "Закрыть",
       prevText: "&#x3C;Пред",
       nextText: "След&#x3E;",
       currentText: "Сегодня",
       monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
       "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
       monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
       "Июл","Авг","Сен","Окт","Ноя","Дек" ],
       dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
       dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
       dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
       weekHeader: "Нед",
       dateFormat: "dd.mm.yy",
       firstDay: 1,
       numberOfMonths: 1,
       isRTL: false,
       showMonthAfterYear: false,
       yearSuffix: ""
   };
   $.datepicker.setDefaults($.datepicker.regional['ru']);

   var SelectedDates = {};
    SelectedDates[new Date('04/07/2020')] = new Date('04/07/2020');
    SelectedDates[new Date('25/07/2020')] = new Date('25/07/2020');
    SelectedDates[new Date('10/07/2020')] = new Date('10/07/2020');

   $('.datepicker').datepicker({
           beforeShowDay: function(date) {
               var Highlight = SelectedDates[date];
               if (Highlight) {
                   return [true, "Highlighted", Highlight];
               }
               else {
                   return [true, '', ''];
               }
           }
       });


    // POP-UPS
    // open reminder pop-up
    var $openReminderBTN = $('.open-reminder-btn');

    $openReminderBTN.click(function () {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#reminder').addClass('active');
    });

    // close pop-up
    $overlay.click(function () {
        $overlayPopUpWRP.removeClass('active');
        $('body, html').removeClass('active');
        $popUpGeneralBlock.removeClass('active');
    });
    $closePopUpBtn.click(function () {
        $overlayPopUpWRP.removeClass('active');
        $('body, html').removeClass('active');
        $popUpGeneralBlock.removeClass('active');
    });
});
