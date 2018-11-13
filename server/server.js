console.log('Hello');

// get the express library from npm
let express = require( 'express' );

// create an instance of express
let app = express();

// create a variable for our PORT
const PORT = 5000;

// show where static files are served ( HTML, CSS, Javascript )
app.use( express.static( 'server/public' ));

// Start the server
app.listen( 5000, function() {
    console.log( 'listening on port', PORT );
    
})