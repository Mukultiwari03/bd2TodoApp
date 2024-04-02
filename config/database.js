const mongoose = require("mongoose");

// es line se kya hoga ki jo bhi apne env me define kra hoga vo sara ka saraa load hojaega process object e under
require("dotenv").config()

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("DB ka Connection is Successful"))
    .catch((error)=>{
        console.log("Issue in DB COnnection");
        console.error(error.message);
        // process.exit(code):

        // process.exit() is a Node.js method used to terminate the process synchronously with an optional exit code.
        // When you call process.exit(1), you're instructing Node.js to terminate the current process immediately and exit with an exit code of 1.
        // The exit code 1 typically indicates that the process exited due to an error.
        process.exit(1);
    });
}

module.exports = dbConnect;

// process vale object me kaise gya url... feed kaise kia??
// .env library is used to do this 
// npm i dotenv====> to download env file