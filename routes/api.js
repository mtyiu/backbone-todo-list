var express = require( 'express' );
var path = require( 'path' );
var mongoose = require( 'mongoose' );
var router = express.Router();

mongoose.connect( process.env.MONGOLAB_URI );

var Item = new mongoose.Schema( {
	title : String,
	content : String,
	completed : Boolean
} );
var ItemModel = mongoose.model( 'Item', Item );

// Retrieve all items
router.get( '/items', function( req, res ) {
	return ItemModel.find( function( err, items ) {
		if ( err )
			throw err;

		return res.send( items );
	} );
} );

// Insert a new item
router.post( '/items', function( req, res ) {
	var item = new ItemModel( {
		title : req.body.title,
		content : req.body.content,
		completed : false
	} );

	return item.save( function( err ) {
		if ( err )
			throw err;

		return res.send( item );
	} );
} );

// Get an item
router.get( '/items/:id', function( req, res ) {
	return ItemModel.findById( req.params.id, function( err, item ) {
		if ( err )
			throw err;

		return res.send( item );
	} );
} );

// Update an item
router.put( '/items/:id', function( req, res ) {
	return ItemModel.findById( req.params.id, function( err, item ) {
		if ( err )
			throw err;

		item.title = req.body.title;
		item.content = req.body.content;
		item.completed = req.body.completed;

		return item.save( function( err ) {
			if ( err )
				throw err;

			return res.send( item );
		} );
	} );
} );

// Delete an item
router.delete( '/items/:id', function( req, res ) {
	return ItemModel.findById( req.params.id, function( err, item ) {
		if ( err )
			throw err;

		return item.remove( function( err ) {
			if ( err )
				throw err;

			return res.send( '' );
		} );
	} );
} );

module.exports = router;
