var express = require( 'express' );
var path = require( 'path' );
var router = express.Router();

router.get( '/', function( req, res, next ) {
    res.sendFile( path.resolve( 'views/index.html' ) );
} );

module.exports = router;
