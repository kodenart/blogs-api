
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER },
    categoryId: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'PostCategories',
  });

  PostCategory.associate = (models) => {

    models.Category.belongsToMany(models.BlogPost,
      { foreignKey: 'categoryId', as: 'categories', through: PostCategory });

    models.BlogPost.belongsToMany(models.Category,
      { foreignKey: 'postId', as: 'blogposts', through: PostCategory });
  };

  return PostCategory;
};