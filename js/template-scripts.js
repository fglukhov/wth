$(window).resize(function() {

	fixedMenu();

});

$(window).scroll(function() {
  var scrollPos = $(window).scrollTop();
	
	
	
});

$(document).ready(function() {

	var wLocation = window.location.hash;
	
	if (wLocation) {
		if ($(".main-menu a.anchor[href="+wLocation+"]").length) {
			$(".main-menu a.anchor[href="+wLocation+"]").addClass("act")
		}
	}

	fixedMenu();

	// Запуск верхнего слайдера
	
	$(".main-slider").mainSlider();

	// Табы с видео
	
	$(".video-tabs .tab").click(function() {
		$(".video-tabs .tab").removeClass("tab-act");
		$(this).addClass("tab-act");
		
		$(".video-player").hide();
		$(".video-player").eq($(this).prevAll(".tab").length).fadeIn(250);
		
	});
	
	// Отзывы
	
	$(".reviews-carousel .jcarousel").jcarousel({
		scroll: 2,
		wrap: 'circular'
	});
	
	// Лидеры о счастье
	
	if($('#content-slider-1').length){
		$('#content-slider-1').royalSlider({
			autoHeight: true,
			arrowsNav: false,
			fadeinLoadedSlide: false,
			controlNavigationSpacing: 0,
			controlNavigation: 'thumbnails',
			imageScaleMode: 'none',
			imageAlignCenter:false,
			loop: false,
			loopRewind: true,
			numImagesToPreload: 6,
			keyboardNavEnabled: true,
			usePreloader: false,
			transitionType:'fade',
			thumbs: {
				autoCenter: true,
				fitInViewport: true,
				orientation: 'horizontal',
				spacing: 0,
				paddingBottom: 0
			},
			controlsInside:false,
			navigateByClick:false
		});
	}
	
	// Цели рефорума
	
	$('.tItem').on('mouseenter',function(){
		var heartPice = $(this).attr('data-heart');
		$('.'+heartPice).show().siblings('.heart').hide();
	}).on('mouseleave',function(){
		$('.heart').hide();
	})
	
	// Speakers row height fix
	
	$(".speakers-list .row").each(function() {
		$(this).css({
			height: $(this).height()
		})
	});
	
	// Colorbox
	
	$(".speakers-list .ajaxBox").colorbox({
		innerWidth:"840px",
		height:'90%',
		fixed:false,
		rel: "speakers-item",
		previous: "<span>предыдущий спикер</span>",
		next: "<span>следующий спикер</span>",
		onOpen:function(){
			$("html,body").css({overflow:"hidden"})
			$("#colorbox").addClass("colorbox-speaker");
			
		},
		onComplete:function() {
			$("#colorbox #cboxLoadedContent").css({
				height:$("#cboxContent").height() - 40
			})
		},
		onClosed:function(){
			$("html,body").css({overflow:"auto"})
			$("#colorbox").removeClass("colorbox-speaker")
		}
	});
	
	$(".register-popup-button").colorbox({
		inline:true, 
		fixed:false,
		onOpen:function(){
			$("#colorbox").addClass("colorbox-1 colorbox-form")
		},
		onClosed:function(){
			$("#colorbox").removeClass("colorbox-1 colorbox-form")
		}
	});
	
	$(".mailing-link").colorbox({
		inline:true, 
		fixed:false,
		onOpen:function(){
			$("#colorbox").addClass("colorbox-2 colorbox-form")
		},
		onClosed:function(){
			$("#colorbox").removeClass("colorbox-2 colorbox-form")
		}
	});
	
	$(".speakers-popup-button").colorbox({
		inline:true, 
		fixed:false,
		onOpen:function(){
			$("#colorbox").addClass("colorbox-3 colorbox-form")
		},
		onClosed:function(){
			$("#colorbox").removeClass("colorbox-3 colorbox-form")
		}
	});
	
	$(".company-popup-button").colorbox({
		inline:true, 
		fixed:false,
		onOpen:function(){
			$("#colorbox").addClass("colorbox-3 colorbox-form")
		},
		onClosed:function(){
			$("#colorbox").removeClass("colorbox-3 colorbox-form")
		}
	});
	
	$(".ticket-popup-button").colorbox({
		inline:true, 
		fixed:false,
		onOpen:function(){
			$("#colorbox").addClass("colorbox-4 colorbox-form")
		},
		onClosed:function(){
			$("#colorbox").removeClass("colorbox-4 colorbox-form")
		}
	});
	
	$(".request-popup-button").colorbox({
		inline:true, 
		fixed:false,
		onOpen:function(){
			$("#colorbox").addClass("colorbox-1 colorbox-form")
		},
		onClosed:function(){
			$("#colorbox").removeClass("colorbox-1 colorbox-form")
		}
	});
	
	$(".partner-popup-button").colorbox({
		inline:true, 
		fixed:false,
		onOpen:function(){
			$("#colorbox").addClass("colorbox-4 colorbox-form")
		},
		onClosed:function(){
			$("#colorbox").removeClass("colorbox-4 colorbox-form")
		}
	});
	
	$(".button-organizer").colorbox({
		innerWidth:"870px",
		height:"90%",
		inline:true, 
		fixed:false,
		onOpen:function(){
			$("#colorbox").addClass("colorbox-5 colorbox-organizer")
		},
		onClosed:function(){
			$("#colorbox").removeClass("colorbox-5 colorbox-organizer")
		}
	});
	
	$(".button-toolshop").colorbox({
		innerWidth:"870px",
		height:"90%",
		inline:true, 
		fixed:false,
		onOpen:function(){
			$("#colorbox").addClass("colorbox-6 colorbox-toolshop")
		},
		onClosed:function(){
			$("#colorbox").removeClass("colorbox-6 colorbox-toolshop")
		}
	});
	
	// Tabbed content
  
  $(".tabbed-content").each(function() {
    var tabs = $(this).find(".tabs").find(".tab");
    var tabContents = $(this).find(".tabs-content").find(".tab-content");
    
    if (!tabs.hasClass("act")) {
      tabs.first().addClass("act");
    }
    
    tabContents.hide();
    tabContents.filter("[rel='"+tabs.filter(".act").attr("rel")+"']").show();
    
    tabs.click(function() {
      tabs.removeClass("act");
      $(this).addClass("act");
      
      // window.location.hash = $(this).attr("rel");
      
      tabContents.hide();
      
      tabContents.filter("[rel='"+$(this).attr("rel")+"']").fadeIn(200)
      
    });
    
  
    if ($(this).find(".tabs-nav").length) {
      $(".tabbed-content").each(function() {
        var prev = $(this).find(".tabs-nav .prev");
        var next = $(this).find(".tabs-nav .next");
        
        var tabs = $(this).find(".tabs");
        
        if (tabs.find(".act").prev(".tab").length) {
          prev.show();
          prev.find("span").html(tabs.find(".act").prev(".tab").find("span").html());
        } else {
          prev.hide();
        }
        
        if (tabs.find(".act").next(".tab").length) {
          next.show();
          next.find("span").html(tabs.find(".act").next(".tab").find("span").html());
        } else {
          next.hide();
        }
        
        prev.click(function() {
          tabs.find(".act").prev(".tab").click();
          if (tabs.find(".act").prev(".tab").length) {
            next.show();
            $(this).find("span").html(tabs.find(".act").prev(".tab").find("span").html());
            next.find("span").html(tabs.find(".act").next(".tab").find("span").html());
          } else {
            $(this).hide();
            next.find("span").html(tabs.find(".act").next(".tab").find("span").html());
          }
        });
        
        next.click(function() {
          tabs.find(".act").next(".tab").click();
          if (tabs.find(".act").next(".tab").length) {
            prev.show();
            $(this).find("span").html(tabs.find(".act").next(".tab").find("span").html());
            prev.find("span").html(tabs.find(".act").prev(".tab").find("span").html());
          } else {
            $(this).hide();
            prev.find("span").html(tabs.find(".act").prev(".tab").find("span").html());
          }
        })
        
        tabs.find(".tab").click(function() {
          next.find("span").html($(this).next(".tab").find("span").html());
          prev.find("span").html($(this).prev(".tab").find("span").html());
          if ($(this).prev(".tab").length) {
            prev.show();
          } else {
            prev.hide();
          }
          if ($(this).next(".tab").length) {
            next.show();
          } else {
            next.hide();
          }
        })

      });
    }
  
	});
	
	// Program tab trigger
	
	$(".expandable-content").each(function() {
		var content = $(this);
		// var origHeight = $(this).outerHeight(true);
		$(this).css({
			height: 430
		})
		var trigger = $(this).find(".expandable-trigger");
		var fade = $(this).find(".expandable-fade");
		
		trigger.click(function() {
			var origHeight = content.find(".expandable-inner").outerHeight(true);
			if (!$(this).hasClass("trigger-on")) {
				$(this).addClass("trigger-on");
				content.transition({
					height: origHeight
				},1000)
				trigger.html(trigger.data("collapsetext"));
				fade.fadeOut(1000);
			} else {
				$(this).removeClass("trigger-on");
				content.transition({
					height: 430
				},1000)
				trigger.html(trigger.data("expandtext"))
				fade.fadeIn(1000);
			}
		});
		
	});
	
	// Place map trigger
	
	$(".place-map-trigger").click(function() {
		var trigger = $(this);
		var mapCont = $(".place-map");
		if (!trigger.hasClass("place-map-trigger-on")) {
			trigger.addClass("place-map-trigger-on");
			trigger.find(".text").html(trigger.data("ontext"));
			mapCont.transition({
				opacity:1
			},250)
		} else {
			trigger.removeClass("place-map-trigger-on");
			trigger.find(".text").html(trigger.data("offtext"));
			mapCont.transition({
				opacity:0
			},250)
		}
	});
	
	// Contacts info trigger
	
	$(".contacts-info-trigger").click(function() {
		var trigger = $(this);
		var contactsInfo = $(".contacts-info");
		if (!trigger.hasClass("contacts-info-trigger-on")) {
			trigger.addClass("contacts-info-trigger-on");
			trigger.html(trigger.data("ontext"));
			contactsInfo.fadeIn(250);
		} else {
			trigger.removeClass("contacts-info-trigger-on");
			trigger.html(trigger.data("offtext"));
			contactsInfo.fadeOut(250);
		}
	});
  
	$(".contacts-info .close").click(function() {
		$(".contacts-info").fadeOut(250)
		$(".contacts-info-trigger").removeClass("contacts-info-trigger-on");
		$(".contacts-info-trigger").html($(".contacts-info-trigger").data("offtext"));
	});
	
	// Top menu
	
	$(".main-menu a.anchor").click(function() {
		
		var anchor = $(this).attr("href").replace("#","");
		
		var link = $(this);
		
		$("a.anchor").removeClass("act");
		$(".main-menu").each(function() {
			$(this).find("li").eq(link.parents("li").prevAll("li").length).find("a.anchor").addClass("act");
		});
		
		if ($(window).width() >= 1225) {
			yDiff = 40
		} else {
			yDiff = 90
		}
		
		$("html,body").animate({
			scrollTop: $("a[name='"+anchor+"']").offset().top - yDiff
		},1000);
		
		return false;
	});
	
	
	// Forms
	
	$("input:text").each(function() {
    if ($(this).val()) {
      $(this).prev(".placeholder").hide();
    }
  });

  $("input.phone").mask("+7 (999) 999-99-99");

  validateForms();
	
	$("form").submit(function() {
    if ($(this).valid()) {
      
			$(this).find("input:text").val("");
			$(this).find("textarea").val("");
	  
			$(this).find(".placeholder").show();
		
    }
	});
	
	$("input:text, input:password, textarea").each(function() {
    $(this).addClass("initial");
    
    if ($(this).prop("tagName") == "INPUT" || $(this).prop("tagName") == "TEXTAREA") {
      // if (!$(this).parents(".input-wrapper").length) $(this).wrap("<div class='input-wrapper'></div>");
      if ($(this).hasClass("phone") || $(this).hasClass("form-date")) {
        $(this).focus(function() {
          $(this).removeClass("initial");
          $(this).parents(".form-item").find(".placeholder").hide();
        });
      } else {
        $(this).focus(function() {
          $(this).parents(".form-item").find(".placeholder").addClass("placeholder-initial");
        });
        $(this).keydown(function() {
          $(this).removeClass("initial");
          $(this).parents(".form-item").find(".placeholder").hide();
        });
      }
      $(this).blur(function() {
        $(this).prev().prev(".placeholder").hide();
        $(this).parents(".form-item").find(".placeholder").removeClass("placeholder-initial");
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    } else {
      $(this).focus(function() {
        $(this).removeClass("initial");
        $(this).parents(".form-item").find(".placeholder").hide();
      });
      $(this).blur(function() {
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    }
      
    $(this).parents(".form-item").find(".placeholder").click(function() {
      $(this).focus();
    });
    
  });
	
	$(".fancybox").fancybox();
  

});

(function( jQuery ) {
  jQuery.fn.mainSlider = function() {
  
  
    var slider = $(this);
    var slides = slider.find(".slide");
    var sliderSize = slides.size();
    
    slides.hide();
    slides.eq(0).show().addClass("slide-act");
    
    //sliderMakeup();
    
    var listerDescr = slider.find(".lister-descr");
    
    listerDescr.html(slides.eq(0).find(".descr").html());
    listerDescr.attr("onclick",slides.eq(0).attr("onclick"))
    
    if (sliderSize > 1) {
    
      slides.bind("click",function () {
        if (listerItems.filter(".act").next().length) {
          listerItems.filter(".act").next().click();
        } else {
          listerItems.eq(0).click();
        }
      });
      
      var listerItems = slider.find(".lister-item");
      
      // slider.find(".slides").after("<div class='next' />");
      // slider.find(".slides").after("<div class='prev' />");
      
      var prevBtn = slider.find(".prev");
      var nextBtn = slider.find(".next");
      
      nextBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        slides.fadeOut(500).removeClass("slide-act");
        if (curIndex < sliderSize-1) {
          curIndex++;
        } else {
          curIndex = 0;
        }
        slides.eq(curIndex).fadeIn(500).addClass("slide-act");
        listerDescr.html(slides.eq(curIndex).find(".descr").html());
        listerDescr.attr("onclick",slides.eq(curIndex).attr("onclick"))
        listerDescr.hide().fadeIn(250);
      });
      
      prevBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        slides.fadeOut(500).removeClass("slide-act");
        if (curIndex > 0) {
          curIndex--;
        } else {
          curIndex = slides.length-1;
        }
        slides.eq(curIndex).fadeIn(500).addClass("slide-act");
        listerDescr.html(slides.eq(curIndex).find(".descr").html());
        listerDescr.attr("onclick",slides.eq(curIndex).attr("onclick"))
        listerDescr.hide().fadeIn(250);
      });
      
      
      
      // listerItems.click(function() {
        // var index = slider.find(".slide[rel='"+$(this).attr("rel")+"']").first().prevAll(".slide").length;
        // slides.fadeOut(500).removeClass("slide-act");
        // slides.eq(index).fadeIn(500).addClass("slide-act");
        // listerItems.removeClass("act");
        // $(this).addClass("act");
      // });
      
    }
    
  }
})( jQuery );

function validateForms() {
  
  $("form").each(function() {
    $(this).validate({
      focusInvalid: false,
      sendForm : false,
      errorPlacement: function(error, element) {
        // element.parents(".input-wrapper").addClass("input-wrapper-error");
        if (element.attr("errortext")) {
          error.html(element.attr("errortext"))
        }
        error.insertAfter(element);
        element.prev(".placeholder").addClass("placeholder-error")
        if (element[0].tagName == "SELECT") {
          element.parents(".form-item").find(".param-selector").addClass("param-sel-error")
        }
        
      },
      unhighlight: function(element, errorClass, validClass) {
        // $(element).parents(".input-wrapper").removeClass("input-wrapper-error");
        $(element).removeClass(errorClass);
        $(element).next(".error").remove();
        $(element).prev(".placeholder").removeClass("placeholder-error");
        if ($(element)[0].tagName == "SELECT") {
          $(element).parents(".form-item").find(".param-selector").removeClass("selector-error")
        }
      },
      invalidHandler: function(form, validatorcalc) {
          var errors = validatorcalc.numberOfInvalids();
          if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {                    
              validatorcalc.errorList[0].element.focus();
          }
      }
    });
    
    if ($(this).find("input.email").length) {
      $(this).find("input.email").rules('add', {
        email: true,
        messages: {
          required:  "Введите правильный e-mail"
        }
      });
    }
    
    if ($(this).find(".form-date").length) {
      $(this).find(".form-date").rules('add', {
        messages: {
          required:  "Выберите дату!"
        }
      });
    }
    
    if ($(this).find("input.email").length && $(this).find("input.phone").length) {
      var thisField = $(this).find("input.phone");
      var relatedField = $(this).find("input.email");
      thisField.rules('add', {
        required: function(element) {
          if (relatedField.val() == "") {
            return true;
          } else {
            return false;
          }
        }
      });
      var thisField2 = $(this).find("input.email");
      var relatedField2 = $(this).find("input.phone");
      thisField2.rules('add', {
        required: function(element) {
          if (relatedField2.val() == "") {
            return true;
          } else {
            return false;
          }
        }
      });
    }
    
    $(document).mouseup(function (e) {
      var container = $("form");

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          $(".error-wrapper").remove();
      }
    });
		
		$(document).mouseup(function (e) {
      var container = $(".tooltip");

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          $(".tooltip").fadeOut(150);
      }
    });
    
  });  
    
}

jQuery.extend(jQuery.validator.messages, {
    required: "Заполните поле!",
    remote: "Please fix this field.",
    email: "Введите правильный e-mail",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function fixedMenu() {

	if ($(window).width() >= 1225) {
		$(".fixed-menu-v").fadeIn(100);
		$(".fixed-menu-h").fadeOut(100);
		$(".header").css({
			marginTop: 0
		});
		$(".top-wrap,.footer").css({
			marginLeft:150
		});
	} else {
		$(".fixed-menu-v").fadeOut(100);
		$(".fixed-menu-h").fadeIn(100);
		$(".header").css({
			marginTop: 80
		});
		$(".top-wrap,.footer").css({
			marginLeft:0
		});
	}
	
  $(".fixed-menu-h .soclinks-trigger").click(function() {
		$(".fixed-menu-h .soclinks").fadeToggle(100);
		$(this).toggleClass("trigger-on")
	});
	
	$(document).mouseup(function (e) {
    var container1 = $(".fixed-menu-h .soclinks");
    var container2 = $(".fixed-menu-h .soclinks-trigger").not(".trigger-on");

    if (!container1.is(e.target) && !container2.is(e.target) // if the target of the click isn't the container...
        && container1.has(e.target).length === 0 && container2.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container1.fadeOut(150);
    }
  });
}
