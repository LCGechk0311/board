const {User} = require('../db/models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class userAuthService{
    static async createUser(inputValue){
        const {email,name,password} = inputValue;
        const user = await User.findByEmail({email});

        const hashPassword = await bcrypt.hash(password,10);
        const newUser = {name,email,password : hashPassword};

        const createdNewUser = await User.create({newUser});

        return createdNewUser;
    }

    static async getUsers(){
        const users = await User.findAll();
        return users;
    }

    static async getUserInfo(userId){
        const user = User.findById(userId);
        return user;
    }

    static async updateUser({userId, inputValue}){
        const user = await User.findById(userId);
        
        const update = User.update(inputValue); 

        return update;
    }

    static async deleteUser(userId){
        const deleteUser = await User.delete(userId);
        return deleteUser;
    }
}

export {userAuthService};