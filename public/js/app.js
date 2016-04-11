var app = app || {};

app.isLoading = ( function() {
	var interval = null;
	var $loading = $( '#loading' );
	return function( isLoading ) {
		if ( isLoading ) {
			if ( ! interval ) {
				$loading.show();
				interval = setInterval(function () {
					$loading.toggle();
				}, 500 );
			}
		} else {
			$loading.hide();
			clearInterval( interval );
			interval = null;
		}
	};
} )();

$( function() {
	new app.ListView();
} );
