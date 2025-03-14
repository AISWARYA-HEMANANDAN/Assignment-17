const mongoose = require('mongoose')
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Db connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports = dbConnection