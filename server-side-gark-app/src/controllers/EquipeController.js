const Equipe = require("../models/equipe.model");


exports.createEquipe = (req, res, next) => {
    const equipe = new Equipe({
        ...req.body
    });
    equipe.save().then(() => {
        res.status(201).json({ message: 'objet crée' })
    }).catch(error => res.status(400).json({ error }));
}

exports.modifyEquipe = async (req, res, next) => {
    Equipe.updateOne({ _id: req.params.id }, { ...req.body }).then(res.status(200).json({ message: "update done" })).catch(error => res.status(404).json({ error }));
}

exports.getOneEquipe = (req, res, next) => {
    Equipe.findOne({ _id: req.params.id }).then(equipe => res.status(200).json(equipe)).catch(error => res.status(404).json({ error }));
}

exports.getEquipeByName = (req, res, next) => {
    Equipe.find({ name: req.params.name }).then(equipe => res.status(200).json(equipe)).catch(error => res.status(400).json({ error }));
}

exports.deleteOneEquipe = (req, res, next) => {

    Equipe.deleteOne({ _id: req.params.id }).then(res.status(200).json({ message: "equipe deleted" })).catch(error => res.status(404).json({ error }));

};

exports.deleteAllEquipe = (req, res, next) => {
    Equipe.deleteMany({}).then(equipe => res.status(200).json(equipe)).catch(error => res.status(400).json({ error }));
}

exports.findEquipe = (req, res, next) => {
    Equipe.find().then(equipe => res.status(200).json(equipe)).catch(error => res.status(400).json({ error }));
}