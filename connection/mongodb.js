import mongoose from "mongoose";
import {dotenvConfig} from '../config/config.js'
dotenvConfig()

const connectionString = process.env.DB_CONNECTION_STRING

export async function mongoConnection() {
  try{
    mongoose.set('strictQuery', true)
    const connection = mongoose.connect(connectionString,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      if(connection){
        console.log(`mongodb connected successfully`)
      }
  }
  catch(e){
    console.log(`mongodb connection failed: ${e}`)
  }
}
