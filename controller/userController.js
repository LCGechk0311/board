const {userAuthService} = require("../services/userService");
const {User} = require("../db/User");


const registerUser = async (req,res,next) =>{
    try {
        const inputValue = req.body;
        const createUser = await userAuthService.createUser(inputValue);

        res.status(200).json(createUser);
    }catch(err){
        next(err);
    }
}

const loginUser = async (req,res,next) => {
    try{
        const user = {
            token :req.token,
            _id : req.user._id,
            name : req.user.name,
            errorMessage : null,
        };
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

const getUsers = async (req,res,next) => {
    try{
        const users = await userAuthService.getUsers();
        res.json(users);
    }catch(err){
        next(err);
    }
}

const currentUser = async (req,res,next) =>{
    try{
        const userId = currentUserId;
        const currentUserInfo = await userAuthService.getUserInfo(userId);

        if (currentUserInfo.errorMessage){
            throw new Error(currentUserInfo.errorMessage);
        }
        res.status(201).json(currentUserInfo);
    }catch(err){
        next(err);
    }
}

const updateUser = async (req,res,next) => {
    try{
        const userId = req.params.id;
        const inputValue = req.body;

        const updatedUser = await userAuthService.updateUser({
            userId,
            inputValue,
        });
        res.status(200).json(updatedUser);
    }catch(err){
        next(err);
    }
}

const deleteUser = async (req,res,next) => {
    try{
        const userId = req.params.id;
        const deletedUser = await userAuthService.deleteUser(userId);
        if (deletedUser.errorMessage){
            throw new Error(deletedUser.errorMessage);
        }

        res.cookie('token', null, {maxAge:0});
        res.status(200).json('탈퇴');
    }catch(err){
        next(err);
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUsers,
    currentUser,
    updateUser,
    deleteUser,
};