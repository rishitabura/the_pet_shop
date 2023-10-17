const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    Name: String,
    Year: Number,
    Gender: CharacterData,
    Breed: String,
    Colour: String,
    VaccinationStatus: String,
    NeuteredStatus: CharacterData,
    Allergies: String,
    AvailableStatus: String,
    Cost: String
});

const Pet = mongoose.model("pet", PetSchema);

module.exports = Pet;