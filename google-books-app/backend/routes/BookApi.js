const BookCont = require('../controller/bookController');
const GoogleCont = require('../controller/googleSearchController');
const router = require('express').Router();

// book routes
router.route('/books/')
    .get(BookCont.findAll).post(BookCont.create);

router.route('/books/:id')
    .get(BookCont.findById).delete(BookCont.remove);


// google book search routes
router.route('/google/').get(GoogleCont.findAll);


module.exports = router;