const { Schema,model } = require('mongoose');

const User = new Schema(
    {
        email : {
            type : String,
            required : true,
        },
        name : {
            type : String,
            required : true,
        },
        password : {
            type : String,
            required : true,
        },
        
    },
    {
        timestamps : true,
    },
);

const UserModel = model('User', User);
export {UserModel};