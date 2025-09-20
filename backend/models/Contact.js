import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : String,
    phone : String,
    company : String,
    status : {
        type : String,
        enum : ["First year", "Second year", "Third year", "Final year", "Passed out"],
        default : "First year"
    },
    createdAt : {type : Date, default : Date.now}
})

export default mongoose.model("Contact", contactSchema)