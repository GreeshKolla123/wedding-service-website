const { Model, DataTypes } = require('sequelize');

class Wedding extends Model {}

Wedding.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING
  },
  date: {
    type: DataTypes.DATE
  },
  time: {
    type: DataTypes.STRING
  },
  location: {
    type: DataTypes.STRING
  },
  dressCode: {
    type: DataTypes.STRING
  }
}, {
  sequelize: db,
  modelName: 'Wedding'
});