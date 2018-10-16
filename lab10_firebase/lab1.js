var admin = require("firebase-admin");

var serviceAccount = require(".//admin_project.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // change this to YOUR PROJECT
    databaseURL: "https://my-project-1514096817615.firebaseio.com"
});

var registrationToken = ''

var payload = {
    data: {
        source: 'Light1',
        resource: 'on success',
        message: 'can it be transferred'
    }
}

admin.messaging().sendToDevice(registrationToken, payload)
    .then(function (response) {
        console.log("successfully sent message, with response=", response)
    }).catch(function (error) {
        console.warn("Error sending message, error=", error)
    })