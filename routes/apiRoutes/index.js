const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = require('./zookeeperRoutes');


router.use(zookeeperRoutes);
router.use(animalRoutes);

module.exports = router;