const { Model, DataTypes } = require('sequelize');

class Photo extends Model {}

Photo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  url: {
    type: DataTypes.STRING
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
  modelName: 'Photo'
});