(function(w){

	console.log("hey");
	
	var sw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var sh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	$(w).resize(function(){ //Update dimensions on resize
		sw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		sh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	});
	

	//Navigation toggle
	$('.nav-toggle-menu').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
	});
	
	//Navigation toggle
	$('.nav-toggle-search').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header .search-form').toggleClass('active');
	});

	$(document).ready(function(){    
	    /* knob plugin */
	    gKnob = {
	        init: function(container){
	            if($(container+" .knob").length > 0) 
	               $(container+" .knob input").knob();            
	        }
	    }
	    /* eof knob plugin */       
	    //  
	    gPlugins("body");
	});

	function gPlugins(container){    
	    gKnob.init(container);   
	}

})(this);

