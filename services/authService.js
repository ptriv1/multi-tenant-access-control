const logins = [
    {
      "username": "amandajonson",
      "password": "$2b$10$RB/cSehL2ovtPQXxQTy1JOF8H2DoOsXAsv4Ih5FOgkeYBTVy9Ip9m",
      "tenantId": 11,
    },
    {
      "username": "bobvenders",
      "password": "$2b$10$on571Jsv2l5tjq93uaB0XOn/CcSZZjkK5vNacRee0WTXlhO9ulyLq",
      "tenantId": 14,
    }
  ]
  
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



async function verifyLogin(username, password, tenantId, role) {
    const user = logins.find(user => (user.role === role) && (user.tenantId === tenantId) && (user.username === username))
        if (!user)
            return null;
        else
            if (await (bcrypt.compare(password, user.password))) 
                {const token = jwt.sign({ username, tenantId, role }, 'secret', { expiresIn: '1h' });
                return token;}
            else
                {return null;}
};

module.exports = { verifyLogin };