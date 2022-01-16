const {connect} = require('mongoose')


connect('mongodb://localhost/discordapp')
  .then(db => console.log(db.connection.name))
