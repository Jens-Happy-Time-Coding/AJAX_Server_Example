// requires
const express = require( 'express' );
const app = express();
/// - NEEDED for POST - ///
const bodyParser = require( 'body-parser' );

// uses
// server static files
app.use( express.static( 'server/public' ) );
/// - NEEDED for POST - ///
app.use( bodyParser.urlencoded( { extended: true } ) );

// globals
const port = 5000;
//test data
let messages = [];

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})

//routes
app.get( '/messages', ( req, res )=>{
    console.log( '/messages GET hit' );
    res.send( messages );
})

app.post( '/messages', ( req, res )=>{
    console.log( '/messages POST hit:', req.body );
    messages.push( req.body );
    res.send( 200 ); //generic "OK", 201 "Created"
})