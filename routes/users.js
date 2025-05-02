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
    else
       res.status(403).json({ message: "Unauthorized" }); 
});

router.post('/', verifyToken, checkTenant, checkRole, (req, res) => {
    console.log("POST /users was hit");
    if (req.user.role === roles.ADMIN)
        res.json(['Creates user']);
    else
        res.status(403).json({ message: "Unauthorized" });
});

module.exports = router;