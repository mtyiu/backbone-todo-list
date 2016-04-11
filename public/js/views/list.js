var app = app || {};

app.ListView = Backbone.View.extend( {
	el : '#list',

	events : {
		'submit form' : 'submit'
	},

	initialize: function() {
		app.isLoading( true );
		this.collection = new app.List();
		this.collection.fetch( { reset : true, success : function() { app.isLoading( false ); } } );
		this.render();

		this.listenTo( this.collection, 'add', this.renderItem );
		this.listenTo( this.collection, 'reset', this.render );
	},

	// Render the list by rendering each item in its collection
	render: function() {
		this.collection.each( function( item ) {
			this.renderItem( item );
		}, this );
	},

	// Render an item by creating a ItemView and appending the element it renders to the list's element
	renderItem: function( item ) {
		var itemView = new app.ItemView( {
			model : item
		} );
		this.$el.find( 'ul' ).append( itemView.render().el );
	},

	submit : function( e ) {
		e.preventDefault();

		var formData = {};

		this.$el.find( 'form input' ).attr( 'disabled', 'disabled' );
		this.$el.find( 'form input[type="text"]' ).each( function( i, el ) {
			formData[ el.id ] = $( el ).val();
		} );

		app.isLoading( true );
		this.collection.create( formData, {
			success : ( function() {
				app.isLoading( false );
				this.$el.find( 'form input' ).removeAttr( 'disabled' );
				this.$el.find( 'form input[type="text"]' ).val( '' );
			} ).bind( this )
		} );
	}
} );
