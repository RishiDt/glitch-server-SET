const fAdmin= require('firebase-admin');
const fKeys = require('./firstore_key.json');
const { getFirestore } = require('firebase-admin/firestore');


fAdmin.initializeApp({
    credential: fAdmin.credential.cert(fKeys)
})


module.exports= getFirestore();