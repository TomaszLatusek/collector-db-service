const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
    FieldName: String,
    FieldType: String,
    IsFilter: Boolean
});

const collectionSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    CollectionName: String,
    Fields: [fieldSchema],
    isPublic: {type: Boolean, default: false},
    allowedUsers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    CreatedAt: {type: Date, default: Date.now},
    UpdatedAt: {type: Date, default: Date.now}
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
