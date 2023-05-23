const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// Creating Associations between constants
User.hasMany(Post, {
    foreignKey: 'user_id'
});

