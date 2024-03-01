const { user : User }  = require('../models');

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: req.query,
        });

        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

const getUser = async (req, res) => {
    try {
        const userId = req.params.id; 
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};


const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await User.update(req.body, {
            where: { id: userId }
          });

        res.status(200).json({ message: 'User updated successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.destroy();

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

  
module.exports = {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
  };