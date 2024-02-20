// import adminModel from '../models/adminModel';

exports.manageProperties = async () => {

};

exports.manageHotels = async () => {
    // Implement hotel management logic


};

exports.manageGuestHouses = async () => {
    // Implement guest house management logic
};

exports.manageUsers = async () => {
    // Implement user management logic
};

exports.manageBookings = async () => {
    // Implement booking management logic
};

exports.monitorChapaTransactions = async () => {
    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'https://api.chapa.co/v1/transaction/initialize',
        'headers': {
            'Authorization': 'Bearer CHAPUBK_TEST-4ZYg2NUniPPnsuJdW6q6tNRNrau76h5p',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "amount": "100",
            "currency": "ETB",
            "email": "abebech_bekele@gmail.com",
            "first_name": "Bilen",
            "last_name": "Gizachew",
            "phone_number": "0912345678",
            "tx_ref": "chewatatest-6669",
            "callback_url": "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
            "return_url": "https://www.google.com/",
            "customization[title]": "Payment for my favourite merchant",
            "customization[description]": "I love online payments"
        })

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

    
};

