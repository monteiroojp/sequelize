const Sequelize = require('sequelize')
const {sequelize} = require('../db/connectDB')


const user = sequelize.define('user', {
    user_id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    working:{
        type: Sequelize.DataTypes.BOOLEAN,
        default: true
    }
    
}, {force: true}) 

user.sync({alter: true}).then((data) => {
    console.log('Table users created')
}).catch('There was some error while creating the users table')

module.exports = user