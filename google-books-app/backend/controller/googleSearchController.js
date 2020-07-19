const Book = require('../model/books');
const axios = require ('axios');

module.exports={

    findAll: function(req, res){
        let params = req;
        axios.get('https://www.googleapis.com/books/v1/volumes?=', params)
            .then(response => 
                console.log(response)
                )
    }
}