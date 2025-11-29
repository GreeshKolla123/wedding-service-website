const { Model, DataTypes } = require('sequelize');

class Rsvp extends Model {}

Rsvp.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  numGuests: {
    type: DataTypes.INTEGER
  },
  weddingId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Wedding',
      key: 'id'
    }
  }
}, {
  sequelize: db,
  modelName: 'Rsvp'
});