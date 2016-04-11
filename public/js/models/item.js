var app = app || {};

app.Item = Backbone.Model.extend( {
	defaults : {
		title : 'Untitled',
		content : 'N/A',
		completed : false
	}
} );
