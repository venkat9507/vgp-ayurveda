function checkal() {
	var det_name= document.getElementById('det_name').value;
	var det_email= document.getElementById('det_email').value;
	var det_phone= document.getElementById('det_phone').value;
	var det_city= document.getElementById('det_city').value;
	var det_package= document.getElementById('det_package').value;
	var det_country= document.getElementById('det_country').value;
	var det_message= document.getElementById('det_message').value;  
	
var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);


	function phonenumber(inputtxt)
    {
      var phoneno = new RegExp("^[0-9?=.*!@#$%^&*]+$");
      var pattern = /^[0-9\$\^()+=\-\[\]\\\'\.\/\{\}\|\"\ ]+$/;
      if(inputtxt.length >5 && inputtxt.length <12 && pattern.test(inputtxt) )
        {
      return true;
        }
      else
        {

        return false;
        }
    }  



	if(det_name =='') {
    $("#det-name-label").html('required').css({"display":"block"});
	$("#det_name").keyup(function() {
	  $("#det-name-label").html('')
    });
	document.getElementById('det_name').focus();
	return false;
	}
	else if(det_email==''){
	    $("#det-email-label").html('required').css({"display":"block"});
	$("#det_email").keyup(function() {
	  $("#det-email-label").html('')
    });
		document.getElementById('det_email').focus();
		return false;
	}
	else if(pattern.test(det_email)== false){
$("#det-email-label").html('Check your mail ID').css({"display":"block"});
	$("#det_email").keyup(function() {
	  $("#det-email-label").html('')
    });
		 document.getElementById('det_email').focus();
		 return false;
	}
	
	else if(det_phone =='') {
	    $("#det-phone-label").html('required').css({"display":"block"});
	$("#det_phone").keyup(function() {
	  $("#det-phone-label").html('')
    });
	   document.getElementById('det_phone').focus();
	   return false;
	}
	
	 else if(!phonenumber(det_phone)){
        $("#det-phone-label").html('Check your Phone Number').css({"display":"block"});
        $("#det_phone").keyup(function() {
          $("#det-phone-label").html('')
    });
         document.getElementById('det_phone').focus();
         return false;
    }
	
	
	else if(det_city =='') {
	    $("#det-city-label").html('required').css({"display":"block"});
	$("#det_city").keyup(function() {
	  $("#det-city-label").html('')
    });
	   document.getElementById('det_city').focus();
	   return false;
	}
	
		else if(det_package =='') {
	    $("#det-package-label").html('required').css({"display":"block"});
	$("#det_package").click(function() {
	  $("#det-package-label").html('')
    });
	   document.getElementById('det_package').focus();
	   return false;
	}
	
		else if(det_country =='') {
	    $("#det-country-label").html('required').css({"display":"block"});
	$("#det_country").click(function() {
	  $("#det-country-label").html('')
    });
	   document.getElementById('det_country').focus();
	   return false;
	}
	
	else if(det_message =='') {
	    $("#det-message-label").html('required').css({"display":"block"});
	$("#det_message").keyup(function() {
	  $("#det-message-label").html('')
    });
	    document.getElementById('det_message');
	    return false;
	}
	
	else{
	  
		$('form#contactform') .html("<div style='font-size:60px;display:inline-block;' uk-spinner=ratio: 3></div>");
		$.ajax({
			type:"POST",
			url:"det-callback.php",
			data:{det_name:det_name,det_email:det_email,det_phone:det_phone,det_city:det_city,det_package:det_package,det_country:det_country,det_message:det_message},
			success: function(info){
			 $('form#contactform').html(info);	
			}
			
		});
		
	}
	
	}


$('.gotosec').click(function(e){
    e.preventDefault();
    if ($($(this).attr('href')).length) {$("html,body").animate({ scrollTop: $($(this).attr('href')).offset().top-150}, "slow");}
});