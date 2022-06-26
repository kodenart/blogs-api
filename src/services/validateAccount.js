const { User } = require('../database/models');

module.exports = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return false;
    // user with given email and password is found
  } if (user.password === password) {
    return true;
  }
  return false;
};