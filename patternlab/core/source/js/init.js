(function(w){
	var sw = document.body.clientWidth,
		sh = document.body.clientHeight;

	$(w).resize(function(){ //Update dimensions on resize
		sw = document.body.clientWidth;
		sh = document.body.clientHeight;
		
		//updateAds();
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

