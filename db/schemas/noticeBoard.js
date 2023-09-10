const {Schema,model } = require("mongoose");

const Board = new Schema({
    title : {
        type : String,
        required : true,
    },
    subTitle : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    postDate : {
        type : Date,
        required : true,
    },
    author : {
        type : String,
        required : true,
    },
    },
    {
        timestamps : true,
    }
);

const BoardModel = model("noticeBoard", Board);
export {BoardModel};