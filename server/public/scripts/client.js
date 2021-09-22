console.log(`js`);

$( document ).ready( onReady );

function onReady () {
    getMessages();
}

function getMessages() {
    console.log( `in getMessages` );
    // AJAX GET call to /messages
    $.ajax( {
        method: 'GET',
        url: '/messages'
    }).then( function( response ){
        // if successful
        console.log( 'back from server GET successful ', response );
    }).catch( function( error ) {
        // got an error
        alert( 'problem!' );
        console.log( error );
    })
}