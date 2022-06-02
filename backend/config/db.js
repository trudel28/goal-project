const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan)
    } catch (error) {
        console.lof(error)
        process.exit(1)
    }
}

module.exports = connectDB