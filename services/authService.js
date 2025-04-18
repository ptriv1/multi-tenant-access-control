const logins = [
    {
      "username": "amandajonson",
      "password": "$2b$10$RB/cSehL2ovtPQXxQTy1JOF8H2DoOsXAsv4Ih5FOgkeYBTVy9Ip9m"
    },
    {
      "username": "bobvenders",
      "password": "$2b$10$on571Jsv2l5tjq93uaB0XOn/CcSZZjkK5vNacRee0WTXlhO9ulyLq"
    }
  ]
  
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


async function verifyLogin(username, password) {
    const user = logins.find(user => user.username === username);
        if (!user)
            return null;
        else
            if (await (bcrypt.compare(password, user.password))) {
                const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });
                return token;
            }
            else
                return null;
            
};

module.exports = { verifyLogin };