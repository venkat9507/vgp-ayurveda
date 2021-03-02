function checkall() {
	var fname= document.getElementById('fname').value;
	var femail= document.getElementById('femail').value;
	var fphone= document.getElementById('fphone').value;
	var flocation= document.getElementById('flocation').value;
	var fmessage= document.getElementById('fmessage').value;  
	var fhead= document.getElementById('fhead').value;  
    
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
	 
	if(fname =='') {
    $("#fname-label").html('required').css({"display":"block"});
	$("#fname").keyup(function() {
	  $("#fname-label").html('')
    });
	document.getElementById('fname').focus();
	return false;
	}
	
	else if(femail==''){
	    $("#femail-label").html('required').css({"display":"block"});
	$("#femail").keyup(function() {
	  $("#femail-label").html('')
    });
		document.getElementById('femail').focus();
		return false;
	}
	else if(pattern.test(femail)== false){
$("#femail-label").html('Check your mail ID').css({"display":"block"});
	$("#femail").keyup(function() {
	  $("#femail-label").html('')
    });
		 document.getElementById('femail').focus();
		 return false;
	}

	
	
else if(fphone =='') {
	    $("#fphone-label").html('required').css({"display":"block"});
	$("#fphone").keyup(function() {
	  $("#fphone-label").html('')
    });
	   document.getElementById('fphone').focus();
	   return false;
	}
	
	
  else if(!phonenumber(fphone)){
        $("#fphone-label").html('Check your Phone Number').css({"display":"block"});
        $("#fphone").keyup(function() {
          $("#fphone-label").html('')
    });
         document.getElementById('fphone').focus();
         return false;
    }
	
	
else if(flocation=='') {
	    $("#flocation-label").html('required').css({"display":"block"});
	$("#flocation").keyup(function() {
	  $("#flocation-label").html('')
    });
	    document.getElementById('flocation');
	    return false;
	}	
	
else if(fmessage=='') {
	    $("#fmessage-label").html('required').css({"display":"block"});
	$("#fmessage").keyup(function() {
	  $("#fmessage-label").html('')
    });
	    document.getElementById('fmessage');
	    return false;
	}
	

		
	else{
		$('#contactform1').html('');
		$.ajax({
			type:"POST",
			url:"callback-book-det.php",
			data:{fname:fname,femail:femail,fphone:fphone,flocation:flocation,fmessage:fmessage,fhead:fhead},
			success: function(info){
			 $('#contactform1').html(info);	
			}
			
		});
		
	}
}