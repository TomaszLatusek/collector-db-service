const express = require('express');
const {createCollection, getCollections} = require('../controllers/collectionController');

const router = express.Router();

router.post('/collections', createCollection);
router.get('/users/:userId/collections', getCollections);

module.exports = router;
