const express = require('express'),
router = express.Router(),
{
    signUp,
    login,
    getUsers,
    updateUser,
    deleteUser
} = require('../controllers/User.controller')
const auth = require('../middlewares/auth')

router.post('/signup', signUp)
router.post('/login', login)
router.get('/', auth, getUsers)
router.put('/', auth, updateUser)
router.delete('/', auth, deleteUser)

module.exports = router