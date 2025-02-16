//A Model allows interacting with the database using Mongoose functions.
 //here we creates the rules(schema) used while interrection with the data base
 import mongoose from 'mongoose';

 const userSchema = new mongoose.Schema({
   username: { 
    type: String,
    required: true,
    unique:true,

   }, 
   email: { 
    type: String,
    required: true,
    unique:true,

   }, 
   password: { 
    type: String,
    required: true,
   }

   }, {timestamps: true}); 

   const User = mongoose.model('User',userSchema);

   export default User;