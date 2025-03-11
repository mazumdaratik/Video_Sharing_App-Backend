import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()
    .then( () => {
        application.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at port ${process.env.PORT}`)
        })
    })
    .catch( (err) => {
        console.log("MongDB connection failed!", err)
    });