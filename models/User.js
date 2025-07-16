import mongoose from "mongoose";

const reviewsSchema =new mongoose.Schema({
  book:{type:mongoose.Schema.Types.ObjectId, ref: "Book"},
  comments: String,
  date:{type: Date, default: Date.now}
})

const userSchema =new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  likedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],

  reviews: [reviewsSchema]
})



const User = mongoose.model("User", userSchema)



export default User