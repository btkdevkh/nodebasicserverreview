const knex = require('../config/db')

class UserModel {
  static find() {
    return knex('profil').select('*')
  }

  static findById(id) {
    return knex('profil').select('*').where('id', id)
  }

  static create(firstname, lastname) {
    return knex('profil').insert({
      first_name: firstname,
      last_name: lastname,
    })
  }

  static updateById(id, firstname, lastname) {
    return knex('profil')
      .update({
        first_name: firstname,
        last_name: lastname,
      })
      .where('id', id)
  }

  static deleteById(id) {
    return knex('profil')
      .del()
      .where('id', id)
  }
}

module.exports = UserModel
