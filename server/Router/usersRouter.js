const express =require('express');
const postgreSqlConnect = require('../dbConnect');

const userRouter = express.Router()



userRouter.get('/', async (req, res) => {
    try {
      const text = 'SELECT * FROM users'; // Assuming the table name is 'users'
      const data = await postgreSqlConnect.query(text);
      res.json(data.rows); // Assuming the result is an array of rows
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  })

userRouter.post('/a',async(req,res)=>{
    res.json(req.body.name)
    console.log(req);
})
  module.exports =userRouter