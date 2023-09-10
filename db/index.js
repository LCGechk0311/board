const mongoose = require("mongoose");
// const { User } = require('./models/User');

const url = process.env.MONGODB_URL ||
"mongodb+srv://newuser:qqqq@cluster0.swykahi.mongodb.net/";

const dbName = 'testprojectDB';

mongoose.connect(url);
const db = mongoose.connection;

db.on("connected", ()=>
    console.log("정상적으로 mongoDB서버에 연결되었습니다. " + url),
);

db.on("error", (error)=>
    console.log("mongoDB연결에 실패하였습니다...\n " + url + "\n"+error),
);

// export{ User };