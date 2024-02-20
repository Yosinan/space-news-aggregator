const Hotel = require('../models/hotelModel');

exports.getAllHotels = async () => {
    return await Hotel.find();
};

exports.getHotelById = async (id) => {
    return await Hotel.findById(id);
};

exports.createHotel = async (hotelData) => {
    const hotel = new Hotel(hotelData);
    return await hotel.save();
}

exports.updateHotel = async (id, hotelData) => {
    const hotel = await Hotel.findById(id);
    Object.assign(hotel, hotelData);
    return await hotel.save();
}

exports.deleteHotel = async (id) => {
    return await Hotel.findByIdAndDelete(id);
}


