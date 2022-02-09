const moment = require('moment');
const UserModel = require('../models/UserModel')

const getUsers = async(req, res) => {
  const people = await UserModel.find()
  res.render('index', {title: 'Home', people, moment})
}

const getCreate = async(req, res) => {
  res.render('form', {title: 'Create'})
}

const postCreate = async(req, res) => {
  if(!req.body.firstname) {
    res.render('form', {title: 'Create', message: 'Fields required'})
    return
  }

  await UserModel.create(req.body.firstname, req.body.lastname)
  res.redirect('/')
}

const getUpdate = async(req, res) => {
  const id = Number(req.params.id)

  if(!id) {
    res.status(404).render('notFound', {title: '404'})
    return
  }

  const profil = await UserModel.findById(id)
  res.render('form', {title: 'Update', profil: profil[0]})
}

const postUpdate = async(req, res) => {
  if(!req.body.firstname) {
    res.render('form', {title: 'Update', message: 'Fields required'})
    return
  }

  await UserModel.updateById(req.body.id, req.body.firstname, req.body.lastname)
  res.redirect('/')
}

const deleteUser = async(req, res) => {
  await UserModel.deleteById(req.params.id)
  res.json({message: 'User deleted', redirect: '/'})
}

module.exports = {
  getUsers,
  getCreate,
  postCreate,
  getUpdate,
  postUpdate,
  deleteUser
}
