console.log(`js`);

$( document ).ready( onReady );

function onReady () {
    getMessages();
    $( '#sendMessageButton' ).on( 'click', sendMessage );
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
        //target output element
        let el = $( '#messagesOut' );
        //empty
        el.empty();
        //loop through array
        for ( let i = 0; i < response.length; i++ ){
            el.append(
                //'<li>' + response[i].author + ' : ' + response[i].text + '</li>'
                `<li><strong>${response[i].author}</strong> : ${response[i].text} </li>`
            );
        }

    }).catch( function( error ) {
        // got an error
        alert( 'problem!' );
        console.log( error );
    })
}

function sendMessage() {
    // get user input & store in an object
    let objectToSend = {
        author: $( '#authorIn' ).val(),
        text: $( '#textIn').val()
    }
    console.log( 'sending:', objectToSend );
    // make AJAX post with the object
    $.ajax({
        method: 'POST',
        url: '/messages',
        data: objectToSend //must have data to send in a POST
    }).then( function( response ) {
        // if successful, update DOM
        getMessages();
    }).catch( function( error ) {
        alert( error );
        console.log( error );
    })
    
    // catch any errors
}