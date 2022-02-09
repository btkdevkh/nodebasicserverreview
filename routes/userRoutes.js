const express = require('express');
const { 
  getUsers, 
  getCreate, 
  postCreate, 
  getUpdate,
  postUpdate,
  deleteUser
} = require('../controllers/userController');

const router = express.Router()

router.get('/', getUsers)
router.get('/create', getCreate)
router.post('/create', postCreate)
router.post('/update', postUpdate)
router.get('/update/:id', getUpdate)
router.delete('/delete/:id', deleteUser)

module.exports = router
