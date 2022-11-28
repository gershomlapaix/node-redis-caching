import mongoose from 'mongoose'

function connectToDB() {
    mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log("Database connected"))
        .catch(err => console.log("error while connecting to database.", err))
}

export {
    connectToDB
}