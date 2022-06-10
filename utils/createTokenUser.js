const createTokenUser = (userObject) => {
  return (tokenUser = {
    name: userObject.name,
    userId: userObject._id,
    role: userObject.role,
  });
};

module.exports = createTokenUser;
