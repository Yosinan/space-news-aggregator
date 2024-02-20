const GuestHouse = require('../models/guestHouseModel');

exports.getAllGuestHouses = async () => {
    return await GuestHouse.find();
};

exports.getGuestHouseById = async (id) => {
    return await GuestHouse.findById(id);
};

exports.createGuestHouse = async (guestHouseData) => {
    const guestHouse = new GuestHouse(guestHouseData);
    return await guestHouse.save();
}

exports.updateGuestHouse = async (id, guestHouseData) => {
    const guestHouse = await GuestHouse.findById(id);
    Object.assign(guestHouse, guestHouseData);
    return await guestHouse.save();
}

exports.deleteGuestHouse = async (id) => {
    return await GuestHouse.findByIdAndDelete(id);
}

