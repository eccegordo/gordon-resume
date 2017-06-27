$(document).ready(function() {

// Focus on the search form	
	$("#searchinput").focus();

	if (window.isie6)
	{
		// Do not implement this feature on IE 6
	}
	else
	{
		// Rollover effect for irregular shaped tabs for Sales and SE links

	   $("#tabsales").mouseover(function () {
	  		$('#navcontainer').css('background', 'transparent url(images/logoheader_saleshover.png) no-repeat');			
	  		$('#salespopup').css('display', 'block');	
		});

	   $("#tabsales").mouseout(function () {
	  		$('#navcontainer').css('background', 'none');			
	  		$('#salespopup').css('display', 'none');
		});

	   $("#tabse").mouseover(function () {
	  		$('#navcontainer').css('background', 'transparent url(images/logoheader_sehover.png) no-repeat');			
	  		$('#sepopup').css('display', 'block');	
		});

	   $("#tabse").mouseout(function () {
	  		$('#navcontainer').css('background', 'none');			
	  		$('#sepopup').css('display', 'none');	
		});

	   $("#icon_camera").mouseover(function () {
	  		$('#popupImgDesc').css('display', 'block');			
		});

	   $("#icon_camera").mouseout(function () {
	  		$('#popupImgDesc').css('display', 'none');			
		});

	   $("#icon_upload").mouseover(function () {
	  		$('#popupUploadDesc').css('display', 'block');			
		});

	   $("#icon_upload").mouseout(function () {
	  		$('#popupUploadDesc').css('display', 'none');			
		});


		// Roll over effects	
		$('img#icon_camera').hover(function() {
			$(this).attr("src","images/icon_camera_hover.png");
				}, function() {
			$(this).attr("src","images/icon_camera.png");
		});

		$('img#icon_upload').hover(function() {
			$(this).attr("src","images/icon_upload_hover.png");
				}, function() {
			$(this).attr("src","images/icon_upload.png");
		});

	}

// Bubble Info popups

	$(function () {
	  $('.bubbleInfo').each(function () {
	    // options
	    var distance = 10;
	    var time = 250;
	    var hideDelay = 200;

	    var hideDelayTimer = null;

	    // tracker
	    var beingShown = false;
	    var shown = false;

	    var trigger = $('.trigger', this);
	    var popup = $('.popup', this).css('opacity', 0);

	    // set the mouseover and mouseout on both element
	    $([trigger.get(0), popup.get(0)]).mouseover(function () {
	      // stops the hide event if we move from the trigger to the popup element
	      if (hideDelayTimer) clearTimeout(hideDelayTimer);

	      // don't trigger the animation again if we're being shown, or already visible
	      if (beingShown || shown) {
	        return;
	      } else {
	        beingShown = true;

	        // reset position of popup box
	        popup.css({
	          top: 10,
	          left: 200,
	          display: 'block' // brings the popup back in to view
	        })

	        // (we're using chaining on the popup) now animate it's opacity and position
	        .animate({
	          top: '-=' + distance + 'px',
	          opacity: 1
	        }, time, 'swing', function() {
	          // once the animation is complete, set the tracker variables
	          beingShown = false;
	          shown = true;
	        });
	      }
	    }).mouseout(function () {
	      // reset the timer if we get fired again - avoids double animations
	      if (hideDelayTimer) clearTimeout(hideDelayTimer);

	      // store the timer so that it can be cleared in the mouseover if required
	      hideDelayTimer = setTimeout(function () {
	        hideDelayTimer = null;
	        popup.animate({
	          top: '-=' + distance + 'px',
	          opacity: 0
	        }, time, 'swing', function () {
	          // once the animate is complete, set the tracker variables
	          shown = false;
	          // hide the popup entirely after the effect (opacity alone doesn't do the job)
	          popup.css('display', 'none');
	        });
	      }, hideDelay);
	    });
	  });
	});

// Bubble Info popups for icons


$(function () {
  $('.bubbleInfoIcon').each(function () {
    // options
    var distance = 10;
    var time = 250;
    var hideDelay = 200;

    var hideDelayTimer = null;

    // tracker
    var beingShown = false;
    var shown = false;

    var trigger = $('.trigger', this);
    var popupicon = $('.popupIcon', this).css('opacity', 0);

    // set the mouseover and mouseout on both element
    $([trigger.get(0), popupicon.get(0)]).mouseover(function () {
      // stops the hide event if we move from the trigger to the popup element
      if (hideDelayTimer) clearTimeout(hideDelayTimer);

      // don't trigger the animation again if we're being shown, or already visible
      if (beingShown || shown) {
        return;
      } else {
        beingShown = true;

        // // reset position of popup box
        // popupicon.css({
        //   top: -100,
        //   left: -100,
        //   display: 'block' // brings the popup back in to view
        // })

        // reset position of popup box
        popupicon.css({
          display: 'block' // brings the popup back in to view
        })

        // (we're using chaining on the popup) now animate it's opacity and position
        .animate({
          top: '-=' + distance + 'px',
          opacity: 1
        }, time, 'swing', function() {
          // once the animation is complete, set the tracker variables
          beingShown = false;
          shown = true;
        });
      }
    }).mouseout(function () {
      // reset the timer if we get fired again - avoids double animations
      if (hideDelayTimer) clearTimeout(hideDelayTimer);

      // store the timer so that it can be cleared in the mouseover if required
      hideDelayTimer = setTimeout(function () {
        hideDelayTimer = null;
        popupicon.animate({
          top: '-=' + distance + 'px',
          opacity: 0
        }, time, 'swing', function () {
          // once the animate is complete, set the tracker variables
          shown = false;
          // hide the popup entirely after the effect (opacity alone doesn't do the job)
          popupicon.css('display', 'none');
        });
      }, hideDelay);
    });
  });
});



});

