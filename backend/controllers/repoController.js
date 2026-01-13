const mongoose = require("mongoose");
const Repository = require("../models/repoModel");
const User = require("../models/userModel");
const Issue = require("../models/issueModel");


async function createRepository  (req, res) {
    const{ owner, name, issues, content, description, visibility } = req.body;
    try {

    }catch (err) {
    console.error("Error during creating repo : ", err.message);
    res.status(500).send("Server error!");
  }
};

async function getAllRepository (req, res) {
    res.send("All Repositories fetched!");
};

async function fetchRepositoryById (req, res) {
    res.send("Repository details fetched");
};

async function fetchRepositoryByName (req, res) {
    res.send("Repository details fetched");
};


async function fetchRepositoriesForCurrentUser (req, res) {
    res.send("Repositories for login in user fetched");
};

async function updateRepositoryById (req, res) {
    res.send("Repository updated!");
};

async function toggleVisibilityById (req, res) {
    res.send("Visibility Toggled!");
};

async function deleteRepositoryById (req, res) {
    res.send("Repository deleted!");
};

module.exports = {
    createRepository,
    getAllRepository,
    fetchRepositoryById,
    fetchRepositoryByName,
    fetchRepositoriesForCurrentUser,
    updateRepositoryById,
    toggleVisibilityById,
    deleteRepositoryById,
};