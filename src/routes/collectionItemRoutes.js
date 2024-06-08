const express = require('express');
const {createItem, getItemsByCollection} = require('../controllers/collectionItemController');

const router = express.Router();

router.post('/items', createItem);
router.get('/collections/:collectionId/items', getItemsByCollection);

module.exports = router;
