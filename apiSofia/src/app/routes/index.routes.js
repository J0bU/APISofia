'use strict';

const {Router} = require('express');

// Initializations & dependencies
const router  = Router();
router.use(require('./user.routes'));
router.use(require('./document.routes'));
router.use(require('./city.routes'));

// Routes
router.get('/', (req, res) => {
    res.json({
            ok:true,
            message: 'index page here rolix'
        });
});

module.exports = router;



