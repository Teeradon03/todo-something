const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js")

const port = 3333;
const app = express();
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["By Food", "Cook Food", "Eat Food"]
const workItems   = [];

app.get("/", (req, res) => {
  
  const day = date.getDate()

  res.render('toDay', { listTitle: day , newlistItems: items})
});

app.post("/", (req, res) => {

  const item = req.body.newItem

  if(req.body.list === "Work"){
      workItems.push(item)
      res.redirect("/work")
  }else{
      items.push(item)
      res.redirect("/")
  }

  console.log(req.body.list);

});

app.get("/work", function(req, res){

  res.render("work", { listTitle: "Work List", newlistItems: workItems})

})

app.post("/work", function(req, res){

  const item = req.body.newItem;
  workItems
})

app.listen(port, () => {
  console.log(`App Listening on port ${port}`);


});
