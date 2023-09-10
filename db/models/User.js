const { UserModel } = require("../schemas/user");

class User {
    static async create({newUser}){
        const createdUser = await UserModel.create({newUser});
        return createdUser;
    }

    static async findByEmail({email}){
        const user = await UserModel.findOne({email});
        return user;
    }

    static async findById(userId){
        const user = await UserModel.findById(userId);
        return user;
    }

    static async findAll(){
        const users = await UserModel.find({});
        return users;
    }

    static async update(inputValue){
        const updateUser = await UserModel.findByIdAndUpdate(inputValue);
        return updateUser;
    }

    static async delete(userId){
        const deleteUser = await UserModel.findByIdAndDelete(userId);
        return deleteUser;
    }
}

export {User};