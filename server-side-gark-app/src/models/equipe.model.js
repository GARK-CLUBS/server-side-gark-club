const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 
const schema = new Schema({
    Name: {type: String, required: true},
    Sport: {type: String, required: true, enum: ['Football', 'Handball', 'Basketball', 'Volley'], default: 'Football'},
    Genre: {type: String, required: true, enum: ['Masculin', 'Feminin', 'Mixte'], default: 'Masculin' },
    CategorieAge: {type: String, required: true, enum: ['Adultes', 'U5', 'U6','U7','U8','U9','U10','U11','U12','U13','U14','U15','U16','U18','U19','U20'], default: 'Adultes' },
    Type: {type: String, required: true, enum: ['Association', 'Club', 'Entreprise','Groupeami','ScolaireUniversitaire'], default: 'Association' },
    Niveau: {type: String, required: true, enum: ['Competition', 'loisir', 'Match'], default: 'Competition' },
    Ville: {type: String, required: true},

}, {timestamps: true})


module.exports = mongoose.model('Equipe', schema)// | setPasswordC
