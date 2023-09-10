const { BoardModel } = require("../schemas/noticeBoard");


class Board {
    static async create(toCreate){
        const newBoard = await BoardModel.create(toCreate);

        return newBoard;
    }

    static async findUser(userId){
        const user = await BoardModel.find({author : userId});

        return user;
    }

    static async findBoard(id){
        const boardId = await BoardModel.findOne({_id : id});
        
        return boardId;
    }

    static async update(id, toUpdate){
        const udpateBoard = await BoardModel.findOneAndUpdate(
            {_id : id},
            toUpdate,
            {returnOriginal : false}
        );

        return udpateBoard;
    }

    static async delete(boardId){
        const deleteBoard = await BoardModel.findOneAndDelete({_id : boardId});

        return deleteBoard;
    }
}

export { Board };