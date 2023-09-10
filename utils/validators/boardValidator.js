const joi = require('joi');

class boardVali {
    static async postBoard(){
        return joi.object({
            title : joi.string().min(1).max(20).required(),
            subtitle : joi.string().min(1).max(30).required(),
            content : joi.string().max(1000).required(),
            postDate : joi.date().iso().required(),
        });
    }

    static async updateBoard(){
        return joi.object({
            title : joi.string().min(1).max(20).optional(),
            subtitle : joi.string().min(1).max(30).optional(),
            content : joi.string().max(1000).optional(),
            postDate : joi.date().iso().optional(),
        });
    }
}

export {boardVali};