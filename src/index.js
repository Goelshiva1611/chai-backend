// require('dotenv').config({
//     path:'./env'
// })
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'    
})
connectDB()
// function connectdb()
// {

// }
// connectdb()
//ifi mathod of function calling 
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", () => {
//             console.log("error")
//             throw error;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port : ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Error : ", error)
//     }
// }
// )()