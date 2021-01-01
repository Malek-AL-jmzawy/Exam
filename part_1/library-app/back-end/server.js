const express = require("express");
const connection=require("./db")
const app = express();
// app.use()
app.get("/books",(req,res)=>{
  const query=`SELECT * FROM books`
  connection.query(query,(err, results)=>{
    console.log(results);
  })
})  

app.get("/books/:book_id",(req,res)=>{
  const query=`SELECT * FROM books WHERE book_id =?`
  const data =req.params.book_id
  connection.query(query,data,(err, results)=>{
    console.log(results);
  })
})
app.delete("/books/:book_id",(req,res)=>{
  const query=`DELETE FROM books WHERE book_id =?`
  const data =req.params.book_id
  connection.query(query,data,(err, results)=>{
    console.log(results);
  })
})
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});