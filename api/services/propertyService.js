const Property = require('../models/propertyModel');

exports.getAllProperties = async () => {
    return await Property.find();
}

exports.getPropertyById = async (id) => {
    return await Property.findById(id);
}

exports.createProperty = async (propertyData) => {
    const property = new Property(propertyData);
    return await property.save();
}

exports.updateProperty = async (id, propertyData) => {
    const property = await Property.findById(id);
    Object.assign(property, propertyData);
    return await property.save();
}

exports.deleteProperty = async (id) => {
    return await Property.findByIdAndDelete(id);
}
