const { Board } = require('../db/models/noticeBoard');
const { boardAuthService } = require('../services/boardService');

const createBoard = async (req,res,next) =>{
    try{
        const author = req.currentUserId;
        const addMyBoard = await boardAuthService.addBoard({
            toCreate: {...req.body,author},
        });
        res.status(201).json(addMyBoard);
    }catch(err){
        next(err);
    }
};

const getMyBoard = async (req,res,next) => {
    try{
        const myBoard = await boardAuthService.getBoard(req.currentUserId);

        res.status(200).json(myBoard);
    }catch(err){
        next(err);
    }
}

const getUserBoard = async (req,res,next) => {
    try{
        const userBoard = await boardAuthService.getBoard(req.params.userId);

        res.status(200).json(userBoard);
    }catch(err){
        next(err);
    }
}

const updateBoard = async (req,res,next) => {
    try{
        const id = req.params.boardId;
        const updateBoard = await boardAuthService.setBoard(id,{
            toUpdate : {...req.body},
        });

        res.status(200).json(updateBoard);
    }catch(err){
        next(err);
    }
}

const deleteBoard = async (req,res,next) => {
    try{
        const deleteBoard = await boardAuthService.deleteBoard(
            req.params.boardId,
        );

        res.status(200).json(deleteBoard);
    }catch(err){
        next(err);
    }
}

module.exports =  { createBoard, getMyBoard, getUserBoard, updateBoard, deleteBoard };