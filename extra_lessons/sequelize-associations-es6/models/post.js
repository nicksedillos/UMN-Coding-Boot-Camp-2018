module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    body: DataTypes.TEXT,
  }, {});
  Post.associate = (models) => {
    models.Post.belongsTo(models.User, {
      foreigKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };
  return Post;
};
