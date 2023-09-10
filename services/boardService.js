const { Board } = require('../db/models/noticeBoard');

class boardAuthService {
    static async addBoard({toCreate}) {
        const createBoard = await Board.create(toCreate);
        return createBoard;
    }

    static async getBoard(userId){
        const user = await Board.findUser(userId);

        return user;
    }

    static async setBoard (id,{toUpdate}){
        const boardId = await Board.findBoard(id);

        const updatedBoard = Board.update(boardId, toUpdate);

        return updatedBoard;
    }

    static async deleteBoard(boardId){
        const deletedBoard = await Board.delete(boardId);

        return deletedBoard;
    }
}

export { boardAuthService };