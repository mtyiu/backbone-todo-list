var app = app || {};

app.Item = Backbone.Model.extend( {
	defaults : {
		title : 'Untitled',
		content : 'N/A',
		completed : false
	},

	parse : function( res ) {
		res.id = res._id;
		return res;
	}
} );
