const joi = require('joi');

class userVali {
    static async registerValidator(){
        return joi.object({
            email : joi.string().min(1).max(20).required(),
            name : joi.string().min(1).max(10).required(),
            password : joi.string().min(1).max(20).required(),
        });
    };

    static async updateValidator(){
        return joi.object({
            email : joi.string().min(1).max(20).optional(),
            name : joi.string().min(1).max(10).optional(),
            password : joi.string().min(1).max(20).optional(),
        });
    }
}

export {userVali};