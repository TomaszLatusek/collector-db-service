const User = require('../models/User');

const createUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

module.exports = {createUser};
