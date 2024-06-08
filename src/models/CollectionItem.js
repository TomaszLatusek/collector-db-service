const mongoose = require('mongoose');

const collectionItemSchema = new mongoose.Schema({
    Collection: {type: mongoose.Schema.Types.ObjectId, ref: 'Collection'},
    Data: Object,
    CreatedAt: {type: Date, default: Date.now},
    UpdatedAt: {type: Date, default: Date.now}
});

const CollectionItem = mongoose.model('Item', collectionItemSchema);

module.exports = CollectionItem;
