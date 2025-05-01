const express = require('express');
const router = express.Router();
const roles = require('../constants/roles.js');
const verifyToken = require('../middleware/authentication.js');
const checkTenant = require('../middleware/tenant.js');
const checkRole = require('../middleware/checkRole.js');

router.get('/', verifyToken, checkTenant, checkRole, (req, res) => {
    console.log("GET /users was hit")
    if (req.user.role === roles.ADMIN) 
        res.json(['List of users']); 
});

router.post('/', (req, res) => {
    console.log("POST /users was hit");
    res.json(['Creates user']);
});

module.exports = router;