const Book = require('../model/books');

module.exports={
    findAll: function (req, res){
        Book.find(req.search).then(dbBook => res.json(dbBook))
            .catch(error => res.json(error));

    },
    findById: function (req, res){
        Book.findById(req.params.id).then(dbBook => res.json(dbBook))
            .catch(error => res.json(error));

    },
    create: function (req, res){
        Book.create(req.body).then(dbBook => res.json(dbBook))
            .catch(error => res.json(error));

    },
    remove: function (req, res){
        Book.findById(req.params.id).then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(error => res.json(error));

    }
};