var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('messages', [
    { id: 1, to: 5551234567, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 2, to: 5551234568, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 3, to: 5551234569, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 4, to: 5551234570, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 5, to: 5551234571, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 6, to: 5551234572, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 7, to: 5551234573, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 8, to: 5551234574, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 9, to: 5551234575, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 10, to: 5551234576, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 11, to: 5551234577, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 12, to: 5551234578, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 13, to: 5551234579, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 14, to: 5551234580, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 15, to: 5551234581, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 16, to: 5551234582, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 17, to: 5551234583, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 18, to: 5551234584, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 19, to: 5551234585, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 20, to: 5551234586, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 21, to: 5551234587, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 22, to: 5551234588, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 23, to: 5551234589, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 24, to: 5551234590, from: 8591234567, body: "Lorem ipsum dolor" },
    { id: 25, to: 5551234591, from: 8591234567, body: "Lorem ipsum dolor" }
  ]);
});

module.exports = router;