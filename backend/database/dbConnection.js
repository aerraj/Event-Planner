import mongoose from 'mongoose';

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{ dbName:"Event_Message"}).then(()=>{console.log("Database connected")}).catch((err)=>{console.log("Error:",err)});
}
