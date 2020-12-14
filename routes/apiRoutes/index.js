const router = require('express').Router();
const noteRoutes = require('../apiRoutes/note');

router.use(noteRoutes);


module.exports = router;