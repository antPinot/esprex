const usersController = (req,res) => {
    const db = require('../database/data.json')
    res.json(db.users)
  }

module.exports = {usersController}