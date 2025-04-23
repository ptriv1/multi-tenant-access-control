const { tenants } = require('../models/tenantModel.js');

function checkTenant(req, res, next) {
    const tenant = tenants.find(tenant => tenant.tenantId === req.user.tenantId); 
    try {
        if (tenant)
            next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}

module.exports = { checkTenant };