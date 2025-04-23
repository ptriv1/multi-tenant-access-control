// confirm user role allows user to do action

const roles = require('../constants/roles.js');

function checkRole(...allowedRoles) {
  return function (req, res, next) {
    try {
      const roleMatch = allowedRoles.includes(req.user.role);
      if (roleMatch) {
        return next();
      } else {
        return res.status(401).json({ message: "Unauthorized: Insufficient role" });
      }
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized: Role check failed" });
    }
  };
}

module.exports = { checkRole };

