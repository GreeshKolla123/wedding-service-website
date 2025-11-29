const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  isAdmin: {
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize: db,
  modelName: 'User'
});