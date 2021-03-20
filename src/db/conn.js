const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/olympics", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
})
.then(() => {
    console.log("Connection successful...")
}).catch((e) => {
    console.log("No Connection")
})