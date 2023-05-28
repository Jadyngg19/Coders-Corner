const router = require('express').Router();

const apiRoutes = require('./API');
const homeRoutes = require('./Home-Routes')
const dashboardRoutes = require('./Dashboard-Routes');

router.use('/API', apiRoutes);
router.use('/', homeRoutes);
router.use('/Dashboard', dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;