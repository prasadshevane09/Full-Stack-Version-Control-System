const getAllUsers = (req, res) => {
    res.send("all user feched!");
};

const signup = (req, res) => {
    res.send("singing up!")
};

const login = (req, res) => {
    res.send("logging up!")
};

const getUserProfile = (req, res) => {
    res.send("Profile feched!");
};

const updateUserProfile = (req, res) => {
    res.send("Profile updated!");
};

const deleteUserProfile = (req, res) => {
    res.send("Profile deleted!");
};

module.exports = {
    getAllUsers,
    signup,
    login,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
}