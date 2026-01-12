const createRepository = (req, res) => {
    res.send("Repository created!");
};

const getAllRepository = (req, res) => {
    res.send("All Repositories fetched!");
};

const fetchRepositoryById = (req, res) => {
    res.send("Repository details fetched");
};

const fetchRepositoryByName = (req, res) => {
    res.send("Repository details fetched");
};


const fetchRepositoriesForCurrentUser = (req, res) => {
    res.send("Repositories for login in user fetched");
};

const updateRepositoryById = (req, res) => {
    res.send("Repository updated!");
};

const toggleVisibilityById = (req, res) => {
    res.send("Visibility Toggled!");
};

const deleteRepositoryById = (req, res) => {
    res.send("Repository deleted!");
};

module.export = {
    createRepository,
    getAllRepository,
    fetchRepositoryById,
    fetchRepositoryByName,
    fetchRepositoriesForCurrentUser,
    updateRepositoryById,
    toggleVisibilityById,
    deleteRepositoryById,
};