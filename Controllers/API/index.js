const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./Post-Routes');
const commentRoutes = require('./Comment-Routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;