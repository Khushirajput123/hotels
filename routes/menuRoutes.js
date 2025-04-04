const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem'); // Correct Model

// POST API - Add a new menu item
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newItem = new MenuItem(data); // Corrected Model Name
        const response = await newItem.save();
        console.log('Data saved');
        res.status(201).json(response); // 201: Created
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET API - Fetch all menu items
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find(); // Corrected Model Name
        console.log('Data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
//comment 
module.exports = router;