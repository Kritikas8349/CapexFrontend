// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Get all users (example admin route)
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find().select('-password'); // exclude passwords
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(500).json({ message: 'Server error', error: err.message });
//     }
// });

// // Get single user by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id).select('-password');
//         if (!user) return res.status(404).json({ message: 'User not found' });
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).json({ message: 'Server error', error: err.message });
//     }
// });

// module.exports = router;
