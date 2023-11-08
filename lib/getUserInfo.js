function getUserInfo(user) {
  return {
    username: user.username,
    email: user.email,
    name: user.name,
    id: user.id || user._id,
  };
}

module.exports = getUserInfo;
