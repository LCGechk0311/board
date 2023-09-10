import { 
    createBoard,
    getMyBoard,
    getUserBoard,
    updateBoard,
    deleteBoard,
} from "../controller/boardController";

const Router = require("express");

const boardRouter = Router();

boardRouter
    .router('/board')
    .post(createBoard)
    .get(getMyBoard);

boardRouter.get('/board/:userId', getUserBoard);

boardRouter
    .router('/board/:boardId')
    .put(updateBoard)
    .delete(deleteBoard);


module.exports = {boardRouter};