const router = require('express').Router();

const userRoutes = require('./User-Rotes');
const postRoutes = require('./Post-Routes');
const commentRoutes = require('./Comment-Routes');

router.use('/Users', userRoutes);
router.use('/Posts', postRoutes);
router.use('/Comments', commentRoutes);

module.exports = router;