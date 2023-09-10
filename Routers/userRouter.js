const Router = require('express');

const {
    registerUser,
    loginUser,
    getUsers,
    currentUser,
    updateUser,
    deleteUser,
} = require('../controller/userController');

const userRouter = Router();

userRouter.post('/userRegister',registerUser);

userRouter.post('/userLogin', loginUser);

userRouter.get('/userlist', getUsers);

userRouter.get('/currentUser', currentUser);

userRouter.put('/user/:id', updateUser);

userRouter.delete('/user/:id', deleteUser);

module.exports = { userRouter };