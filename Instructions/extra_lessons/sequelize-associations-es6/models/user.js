module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    models.User.hasMany(models.Post);
  };
  return User;
};
