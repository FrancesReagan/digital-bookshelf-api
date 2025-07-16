import express from "express";
import User from "../models/User.js";

const router = express.Router()

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message})
   }
})

// creates a new user//
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser)
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message})
  }
})

// reviews//
router.post("/:userId/reviews/:bookId", async (req,res)=> {
  try {
    const user = await User.findById(req.params.userId)
    user.reviews.push({book: req.params.bookId, comments: req.body.comments})
    await user.save()
    res.json(user)
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message})
  }
})

router.post("/:userId/likes/:bookId", async(req,res)=> {
  try {
    const user = await User.findById(req.params.userId)
    user.likedBooks.push(req.params.bookId)
    await user.save()
    res.json(user)
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message})
  }
})
export default router;
