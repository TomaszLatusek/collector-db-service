const CollectionItem = require('../models/CollectionItem');

const createCollectionItem = async (req, res) => {
    const newItem = new CollectionItem(req.body);
    try {
        const item = await newItem.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

const getItemsByCollection = async (req, res) => {
    const {collectionId} = req.params;
    try {
        const items = await CollectionItem.find({Collection: collectionId});
        res.status(200).json(items);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

module.exports = {createItem: createCollectionItem, getItemsByCollection};
