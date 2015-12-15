// //twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
          if(!d.getElementById(id)){js=d.createElement(s);
          js.id=id;
          js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
//facebook
(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

//document ready
$(document).ready(function(){
	//$(".message-box").css("border", "2px dotted red");
	$(".message-box").on("keyup", function(){
		console.log("keyup happened");
	})
	//nav bar
	var $root = $('html, body');
        $('.navbar-nav a').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
            return false;
        });
    //work section
    for(j=1; j<4; j++){
    	for(var i=0; i<works.length; i++){
    		//works[i]=works[i].css("border", "2px color blue");
	    	$("#project"+j).append("\
	    		<div class='col-lg-3 col-md-3 col-sm-6 col-xs-12'>\
	    			<a class='work-img' href='#'>\
	    			<img src='" + works[i].pic + "' alt='monkey' class='img-responsive'>\
	    			<span class='info'><p class='proj-title'>Title:</p> "+works[i].title+" </span>\
	    			</a>\
	    		</div>\
	    		");
	    	//Hover over work mages
	    	var images = $("#project"+j+" img");
	    	if(i%2 === 0){
	    		$(images[i]).css("border", "2px solid salmon");
	    	}else{
	    		$(images[i]).css("border", "2px solid DodgerBlue");
	    	}
    	};
    };
    $(".work-img").mouseenter(function(){
		$(".info", this).show();
	});
	$(".work-img").mouseleave(function(){
		$(".info", this).hide();
	});
});

var map;
function initMap() {
	var myLatLng = {lat: 40.7416804, lng: -73.9245582};

  	var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 8,
    	center: myLatLng
  	});

  	var marker = new google.maps.Marker({
    	position: myLatLng,
    	map: map
  	});
}
// contact us submit form
$("#submit").on("click", function(){
	var name = $("#name").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	var comment = $(".message-box").val();
	
	$("#visible-name").html("<b>Your Name:</b> "+name);
	$("#name").hide();
	$("#visible-phone").html("<b>Your Phone Number:</b> "+phone);
	$("#phone").hide();
	$("#visible-email").html("<b>Your Email:</b> "+email);
	$("#email").hide();
	
	console.log(name);
	console.log(phone);
	console.log(email);
	console.log(comment);
	console.log("clicked");

	var charCount = $(".message-box").val().length;
	if(charCount > 50){
		$("#char-count").css("color", "red");
	}else{
		$("#char-count").css("color", "black");
	}
	if(comment === ""){
		$(".message-box").css("border", "2px solid red");
		$("#visible-enter-message").html("<b>Please enter a message and press Enter</b>").css("color", "red");
	}else{
		$("#visible-comment").html("<b>Your message:</b> "+comment.toUpperCase()+"<br/><br/><b> We have received your message!</b>");
		$(".message-box").hide();
		$("#visible-enter-message").hide();
		$("button").hide();
	}
	$("#char-count").html("<b>number of characters you entered:</b> "+charCount);
	console.log(charCount);
	return false;
});
//stellar scrolling
$(window).stellar();

// tooltips
$(function () {
     $("[rel='tooltip']").tooltip();
});

