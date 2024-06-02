$(window).load(function() { 
  $('.pfs-sec .pfs-tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.pfs-sec .pfs-tabs li').removeClass('active');
    $('.pfs-sec .pfs-tab-content').removeClass('active');
    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  });
  
  $('.pfr-sec .pfs-tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.pfr-sec .pfs-tabs li').removeClass('active');
    $('.pfr-sec .pfs-tab-content').removeClass('active');
    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  });	
  
  $('.lpfs-list,.lpfr-list').bxSlider({
    mode: 'horizontal',
    captions: false,
    slideWidth: 222,
    slideMargin:10,
    pager: false,
    controls: true,
    minSlides:1,
    moveSlides: 5,
    maxSlides: 5,
    infiniteLoop: false,
    hideControlOnEnd: true,
    nextText:'<i class="fa fa-angle-right"></i>',
    prevText:'<i class="fa fa-angle-left"></i>',
  });   
});

$(window).load(function() { 
  $('.ciab').bxSlider({
    mode: 'horizontal',
    captions: false,
    slideWidth:980,
    pager:true,
    controls: false,
    minSlides: 1,
    moveSlides: 1,
    maxSlides:1,
    infiniteLoop: true,
    responsive:true,
    auto:true,
    autoDelay:500        
  });	
  
  $('.pwp-list').bxSlider({
    mode: 'horizontal',
    captions: false,
    slideMargin:10,
    slideWidth:277,
    pager: false,
    controls: true,
    minSlides: 1,
    moveSlides: 1,
    maxSlides:4,
    infiniteLoop: false,
    hideControlOnEnd: true,
    nextText:'<i class="fa fa-angle-right"></i>',
    prevText:'<i class="fa fa-angle-left"></i>',
  });
  
  $('.tlci-list').bxSlider({
    mode: 'horizontal',
    captions: false,
    slideMargin:15,
    slideWidth:370,
    pager: false,
    controls: true,
    minSlides: 1,
    moveSlides: 1,
    maxSlides:3,
    infiniteLoop: false,
    hideControlOnEnd: true,
    nextText:'<i class="fa fa-angle-right"></i>',
    prevText:'<i class="fa fa-angle-left"></i>',
  }); 
  
  $('#reiIndexFPA').bxSlider({
    mode: 'horizontal',
    captions: false,
    slideWidth: 285,
    slideMargin:0,
    pager: false,
    controls: true,
    minSlides: 1,
    moveSlides: 1,
    maxSlides:4,
    infiniteLoop: false,
    hideControlOnEnd: true,
    nextText:'<i class="fa fa-angle-right"></i>',
    prevText:'<i class="fa fa-angle-left"></i>',
  });

  $('.pfs-sec .pfs-tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.pfs-sec .pfs-tabs li').removeClass('active');
    $('.pfs-sec .pfs-tab-content').removeClass('active');
    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  });
  
  $('.pfr-sec .pfs-tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.pfr-sec .pfs-tabs li').removeClass('active');
    $('.pfr-sec .pfs-tab-content').removeClass('active');
    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  });	
});



$('#select_city').on('click',function(e){
	$('#srch_loc').toggle();
	e.stopPropagation();
});
$('#srch_loc a,#srch_loc input,#srch_loc button').on('click',function(e){
	e.stopPropagation();
});
$(document).on('click',function(){
	$('#srch_loc').hide();
});

function SubmitSearch(searchfor, cityid, cityname, subcityid, subcityname) {
	$('#loading_proc').show();
	$("#loading_proc").html('<img src="https://static.realestateindia.com/rei/images/loading.gif" alt="Please Wait..." title="Please Wait..."/>');
	
	//Tabbing on/off
	if(searchfor=='buy') {
		$("#prop_rent,#prop_project,#prop_commercial,#prop_dealer").removeClass("on");
		$("#prop_buy").addClass("on");
	}
	else if(searchfor=='rent') {
		$("#prop_buy,#prop_project,#prop_commercial,#prop_dealer").removeClass("on");
		$("#prop_rent").addClass("on");
	}
	else if(searchfor=='project') {
		$("#prop_buy,#prop_rent,#prop_commercial,#prop_dealer").removeClass("on");
		$("#prop_project").addClass("on");
	}
	else if(searchfor=='commercial') {
		$("#prop_buy,#prop_rent,#prop_project,#prop_dealer").removeClass("on");
		$("#prop_commercial").addClass("on");
	}
	else if(searchfor=='dealer') {
		$("#prop_buy,#prop_rent,#prop_project,#prop_commercial").removeClass("on");
		$("#prop_dealer").addClass("on");
	}
	
	var cityid_str;
	var cityname_str;
	if(cityid!='') {
		cityid_str = cityid;
	}
	else {
		cityid_str = '';
	}
	if(cityname!='') {
		cityname_str = cityname;
	}
	else {
		cityname_str = '';
	}
	$.ajax({
		type : 'POST',
		url  : "https://www.realestateindia.com/search_property_project_service_new.php",
		dataType: "html",
		cache : false,
		data: { action_type:"search_from", searchfor:searchfor, ref_cityid:cityid_str, ref_cityname:cityname_str, subcityid:subcityid, subcityname:subcityname},
		success :  function(msg) {
			$("#loading_proc").html('');
			if(msg!='') {
				$('#searchtype').html('');
				$('#searchtype').html(msg);
			}
		}
	});
	//return true;
}

var showChar = 500;
var ellipsestext = "...";
$(".truncate").each(function() {
	var content = $(this).html();
	if (content.length > showChar) {
	var c = content.substr(0, showChar);
	var h = content;
	var html =
	  '<div class="truncate-text" style="display:block">' +
	  c + '<span class="moreellipses">' + ellipsestext + '&nbsp;&nbsp;<a href="" class="moreless blue more">more <i class="fa fa-angle-down"></i></a></span></div><div class="truncate-text" style="display:none">' + h + '<a href="" class="moreless blue less">Less <i class="fa fa-angle-up"></i></a></div>'; $(this).html(html);
	}
});

$(".moreless").click(function() {
	var thisEl = $(this);
	var cT = thisEl.closest(".truncate-text");
	var tX = ".truncate-text";
	if (thisEl.hasClass("less")) {
	cT.prev(tX).toggle();
	cT.slideToggle();
	} else {
	cT.toggle();
	cT.next(tX).fadeToggle();
	}
	return false;
}); 

$(document).on('click','div.post_list', function(){var dg=$(this).data('url');$(this).append('<a class="ps_c" href="'+dg+'" target="_blank" />');$('a.ps_c',this)[0].click(); $('.ps_c',this).remove();});
$(document).on('click', 'div.post_list a,div input',function(e){e.stopPropagation();}) 

$(document).on("click",".pw-list li,.reiit-list li",function(){var c=$(this).data("url");$(this).append('<a class="ps_c" href="'+c+'" />'),$("a.ps_c",this)[0].click(),$(".ps_c",this).remove()}),
$(document).on("click",".pw-list li a, .reiit-list li a",function(c){c.stopPropagation()});

$(document).on('click', 'li.pr_list', function() {var dg = $(this).data('url');$(this).append('<a class="ps_c" href="' + dg + '" target="_blank" />');$('a.ps_c', this)[0].click();$('.ps_c', this).remove();})
$(document).on('click', 'li.pr_list a,li input',function(e){e.stopPropagation();})

$(document).ready(function(){
	
	// Set the data text
	var dataText = 'id=impression&page=/delhi-property/&referrer=https://www.realestateindia.com/delhi-property/index.htm&banner_city=584';
	
	$.ajax({
		type: "POST",
		url: "https://www.realestateindia.com/myaccount/banner-impression.php",
		data: dataText,
		success: function() {
		}
	});
});

$(document).on('click','div.ps-list', function() {
    var dg = $(this).data('url');
    $(this).append('<a class="ps_c" href="' + dg + '" target="_blank" />');
    $('a.ps_c', this)[0].click();
    $('.ps_c', this).remove();
});
$(document).on('click', '.ps-list a,.ps-list input,.ps-list ul.releted_img span.no_link,div.ps-list ._show_f_data',function(e){e.stopPropagation();}) 

	$(window).load(function(){
		$("a[rel='terms_conditions']").fancybox({
			'width'				: 900,
			'height'			: 600,
			'autoScale'     	: false,
			'transitionIn'		: 'elastic',
			'transitionOut'		: 'elastic',
			'type'				: 'iframe',
			arrows				: false
		});
	});
	
	$(window).load(function(){
		$('.fancy_dealer', document).fancybox({"type" : "iframe", "width" : 670, "height" : 415});
	});
	
$('.panel .heading').click(function(){
    $(this).parent().find('.accordion_details').slideToggle();
	$(this).toggleClass('open');
});	

$('.map-container')
.click(function(){
$(this).find('iframe').addClass('clicked')})
.mouseleave(function(){
$(this).find('iframe').removeClass('clicked')});	

	$(window).load(function(){
		$('.exp_service').bxSlider({
			mode: 'horizontal',
			captions: false,
			slideWidth:192,
			pager: false,
			controls: true,
			minSlides: 1,
			moveSlides: 1,
			maxSlides:6,
			infiniteLoop: false,
			hideControlOnEnd: true,
			nextText:'<i class="fa fa-angle-right"></i>',
			prevText:'<i class="fa fa-angle-left"></i>',
		});
		
		$('.epci-rp-list').bxSlider({
			mode:'horizontal',
			captions:false,
			slideWidth:160,
			slideMargin:5,
			pager:false,
			controls:true,      
			minSlides:1,
			moveSlides:1,
			maxSlides:7,
			infiniteLoop:false,
			hideControlOnEnd:true,
			nextText:'<span class="next-arrow"></span>',
			prevText:'<span class="prev-arrow"></span>'
		});
		
		$('.epci-cp-list').bxSlider({
			mode:'horizontal',
			captions:false,
			slideWidth:226,
			slideMargin:5,
			pager:false,
			controls:true,      
			minSlides:1,
			moveSlides:1,
			maxSlides:5,
			infiniteLoop:false,
			hideControlOnEnd:true,
			nextText:'<span class="next-arrow"></span>',
			prevText:'<span class="prev-arrow"></span>'
		});
		
		$('.ciab').bxSlider({
			mode: 'horizontal',
			captions: false,
			slideWidth:980,
			pager:true,
			controls: false,
			minSlides: 1,
			moveSlides: 1,
			maxSlides:1,
			infiniteLoop: true,
			responsive:true,
			auto:true,
			autoDelay:500
			
		});
		
		$('#reiCityFPA').bxSlider({
			mode: 'horizontal',
			captions: false,
			slideWidth:285,
			slideMargin:0,
			pager: false,
			controls: true,
			minSlides: 1,
			moveSlides: 1,
			maxSlides:4,
			infiniteLoop: false,
			hideControlOnEnd: true,
			nextText:'<i class="fa fa-angle-right"></i>',
			prevText:'<i class="fa fa-angle-left"></i>',
		});
		
		$('#byPropertyTypeSaleUL,#byPropertyTypeRentUL').bxSlider({
			mode: 'horizontal',
			captions: false,
			slideWidth: 285,
			slideMargin:0,
			pager: false,
			controls: true,
			minSlides: 1,
			moveSlides: 1,
			maxSlides:4,
			infiniteLoop: false,
			hideControlOnEnd: true,
			nextText:'<i class="fa fa-angle-right"></i>',
			prevText:'<i class="fa fa-angle-left"></i>',
	    });  
		
		$('.js-dynamic-height').dynamicMaxHeight();
	});
 
	$(document).on("click",".in_box_s",function(){var c=$(this).data("url");$(this).append('<a class="ps_c" href="'+c+'" target="_blank" />'),$("a.ps_c",this)[0].click(),$(".ps_c",this).remove()}),
	$(document).on("click",".in_box_s a,.in_box_s input",function(c){c.stopPropagation()});
	
	$(document).on("click",".full_link",function(){var c=$(this).data("url");$(this).append('<a class="ps_c" href="'+c+'" target="_blank" />'),$("a.ps_c",this)[0].click(),$(".ps_c",this).remove()}),
	$(document).on("click",".full_link a,.full_link input",function(c){c.stopPropagation()});
	
$(document).ready(function(){
	$('.property-smc').click(function(){
		$(this).parents('.more-property').find('.more-contact').slideToggle();
		if($(this).text() == '+ Show More'){
			$(this).text('- Hide More')
		} else {
			$(this).text('+ Show More')
		}
	});
		
}); 

$( window ).load(function() {
	$('.menu_slide').bxSlider({
		mode: 'horizontal',
		captions: false,
		slideWidth: 265,
		pager: false,
		controls: true,
		minSlides: 1,
		moveSlides: 1,
		maxSlides:3,
		infiniteLoop: false,
		hideControlOnEnd: true,
		nextText:'<i class="fa fa-angle-right"></i>',
		prevText:'<i class="fa fa-angle-left"></i>',
	}); 
});	

var customLinks = document.getElementsByClassName("customLink");
for (var i = 0; i < customLinks.length; i++) {
	customLinks[i].addEventListener("click", function() {
		var targetUrl = "https://www.realestateindia.com?hprlink=logo";
		window.open(targetUrl, "_self");
	});
}