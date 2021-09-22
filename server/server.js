// requires
const express = require( 'express' );
const app = express();

// uses
// server static files
app.use( express.static( 'server/public' ) );

// globals
const port = 5000;
//test data
let messages = [ {
    author: 'Jen',
    text: 'testing'
}];

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})

//routes
app.get( '/messages', ( req, res )=>{
    console.log( '/messages GET hit' );
    res.send( messages );
})