const Collection = require('../models/Collection');

const createCollection = async (req, res) => {
    const newCollection = new Collection(req.body);
    try {
        const collection = await newCollection.save();
        res.status(201).json(collection);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

const getCollections = async (req, res) => {
    const userId = req.params.userId;
    try {
        const collections = await Collection.find({
            $or: [
                {user: userId},
                {isPublic: true},
                {allowedUsers: userId}
            ]
        });
        res.status(200).json(collections);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

module.exports = {createCollection, getCollections};
