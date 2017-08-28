var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('contacts', [
    { id: 1, name: "John Doe", phone: 8591234567 },
    { id: 2, name: "Jane Doe", phone: 8591234567 },
    { id: 3, name: "Jim Doe", phone: 8591234567 },
    { id: 4, name: "Johnny Doe", phone: 8591234567 },
    { id: 5, name: "Janice Doe", phone: 8591234567 },
    { id: 6, name: "Jimmy Doe", phone: 8591234567 },
    { id: 7, name: "James Doe", phone: 8591234567 },
    { id: 8, name: "Joanna Doe", phone: 8591234567 },
    { id: 9, name: "Joan Doe", phone: 8591234567 },
    { id: 10, name: "Jill Doe", phone: 8591234567 },
  ]);
});

module.exports = router;