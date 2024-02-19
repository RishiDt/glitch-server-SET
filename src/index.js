const express = require('express');
const expressApp = express();
 require('./firestore_api')
 require('./websocket_api')
const PORT =5000;
expressApp.listen(PORT,(req,res)=>{
console.log(`Server listening on port ${PORT}.`);
})
