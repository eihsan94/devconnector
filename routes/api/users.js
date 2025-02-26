const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User')
// @route       POST api/users
// @desc        Register user
// @access      Public
router.get(
    '/',
    // check('name', 'Name is required').notEmpty(),
    // check('email', 'Please include a valid email').isEmail(),
    // check(
    //     'password',
    //     'Please enter a password with 6 or more characters'
    // ).isLength({ min: 6 }),
    async(req, res) => {
        console.log(req);
        const users = await User.find({})
        res.json(users)
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
    }
);

// @route       POST api/users
// @desc        Register user
// @access      Public
router.post(
    '/',
    // check('name', 'Name is required').notEmpty(),
    // check('email', 'Please include a valid email').isEmail(),
    // check(
    //     'password',
    //     'Please enter a password with 6 or more characters'
    // ).isLength({ min: 6 }),
    (req, res) => {
        console.log(req.body);
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        res.send('User route');
    }
);

module.exports = router;