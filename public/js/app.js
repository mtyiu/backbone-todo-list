var app = app || {};

$( function() {
	var list = 	[
		{ title : 'Item #1', content : 'Content #1', completed : true },
		{ title : 'Item #2', content : 'Content #2', completed : false },
	];

	new app.ListView( list );
} );
