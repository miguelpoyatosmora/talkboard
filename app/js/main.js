        $(function() {
				function sleep(delay) {
				        var start = new Date().getTime();
				        while (new Date().getTime() < start + delay);
				}
                $(".cell").click(function() {
					$( ".sentence" ).append( $( this ).clone() );
				});
		                $("#clearbtn").click(function() {
					$( ".sentence" ).empty(  );
				});
		        $("#playbtn").click(function () {
					jQuery.each( $( ".sentence audio" ), function( i, val ) {
						val.play();
 	 					sleep(1000);
					});

				});
        });
