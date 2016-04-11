var app = app || {};

app.ItemView = Backbone.View.extend( {
	tagName : 'li',
	className : 'list-group-item',
	template : _.template( $( '#item-tpl' ).html() ),

	events : {
		'click .delete' : 'deleteItem'
	},

	render : function() {
		this.$el.html( this.template( this.model.attributes ) );
		return this;
	},

	deleteItem : function( e ) {
		e.preventDefault();

		// Delete model
		this.model.destroy();

		// Delete view
		this.remove();
	}
} );
