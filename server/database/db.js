
import mongoose from "mongoose";



const Connection = async(username,password) => {
    const URL = `mongodb+srv://${username}:${password}@crud-app.cwjmq68.mongodb.net/?retryWrites=true&w=majority&appName=crud-app`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology : true, useNewUrlParser : true});
        console.log('Database Connected Successfully');
    }
    catch(error){
        console.log('Error while connecting with the database',error);
    }
}

export default Connection;