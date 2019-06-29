/**
 * Examples of using async/await with Sequelize methods.
 * @module
 */

const db = require('./models');

/**
 * Create a post for the specified user.
 *
 * @param {Object} models - Collection of Sequelize models.
 * @param {number} userId - ID of the target user.
 * @param {string} body - Content for the post.
 * @return {Promise<Object>} - Promise that resolves to the new post.
 */
const createUserPost = async (models, userId, body) => {
  const user = await models.User.findById(userId);

  // Here we use the `createPost()` method that was added when we setup up the
  // Sequelize association.
  const post = await user.createPost({ body });

  return post;
};

/**
 * Get the user who authored the given post.
 *
 * @param {Object} models
 * @param {number} postId
 * @return {Promise<Object>}
 */
const getPostUser = async (models, postId) => {
  const post = await models.Post.findById(postId);

  // The `getUser()` method was also set up by the Sequelize association.
  const user = await post.getUser();

  return user;
};

// Get the user that authored post 2, then create a new post for that user.
getPostUser(db, 2)
  .then(user => createUserPost(db, user.id, 'New post.'))
  .then((newPost) => {
    console.log(JSON.stringify(newPost, null, '  ')); // eslint-disable-line
    process.exit();
  });
