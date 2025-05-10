const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function verifyToken(req, res) {
    try {
        if (req.headers["authorization"]) 
            {const token = req.headers["authorization"].split(" ")[1];
            const decoded = jwt.verify(token, secret);
            req.user = decoded;
            next();
            }} catch (err) {
                return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports = { verifyToken };
