import {Schema, model, Models, Document, Mongoose} from 'mongoose';

const UserSchema = new Schema({
    email:{
        type:String,
    },
    name:{
        type:String,
    },
});


export const User = model<any>('User', UserSchema)



export default defineEventHandler(async(event)=>{

    const users = await  User.find()
    return{
        users,
    }
})