require('dotenv').config()
const jwt = require('jsonwebtoken');
const { user : User }  = require('../models');
const jwt_secret_key = process.env.JWT_SECRET_KEY;

const register = async (req, res) => {
    try {
        const { username, firstName, lastName, email, password, role } = req.body;

        if (!username || !firstName || !lastName || !email || !password) {
            return resbackend.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Username is already registered' });
        }

        const newUser = await User.create({
            username,
            firstName,
            lastName,
            email,
            password,
            role
        });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};
  
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, jwt_secret_key, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token, user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

module.exports = {
    register,
    login,
  };