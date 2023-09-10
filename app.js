const cors = require("cors");
const express = require("express");
const { userRouter } = require('./Routers/userRouter');
const { boardRouter } = require('./Routers/boardRouter');
require('./db/index');

const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send('기본 페이지');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(userRouter);
app.use(boardRouter);


module.exports = app; 