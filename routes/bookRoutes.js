
import express from "express";
import Book from "../models/Books.js"

const router = express.Router()

// Real All: GET / -retrieves all books from the database//
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Create: POST / - createsa new book using the data in req.body//
router.post("/", async (req,res) => {
  try {
    const newBook = await Book.create(req.body)
    res.status(201).json(newBook)
  } catch(error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
});

// Read One: GET /:id - retrieves a single book by its _id//
router.get("/:id", async(req,res) => {
  try {
    const book = await Book.findById(req.params.id)
    res.json(book)
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message})
  }
})


router.delete("/:id", async (req,res)=> {
  try {
    await Book.findByIdAndDelete(req.params.id)
    res.json({message: "Book deleted"})
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message})
  }
})

router.put("/:id", async (req,res)=> {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body)
    res.json(updated)
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message})
  }
})



router.post('/:id/like', async (req, res) => {
  try {
    const likedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      // Return the updated document//
      { new: true } 
    );

    if (!likedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json({ message: 'Book liked', likes: likedBook.likes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

  
export default rout