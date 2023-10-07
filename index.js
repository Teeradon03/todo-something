import express from 'express'
import bodyParser from 'body-parser';

const port = 3333;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// Create a new Date object
const currentDate = new Date();

// Define options for formatting the date
const options = {
  weekday: 'long', // Full day of the week (e.g., "Friday")
  month: 'long',   // Full month name (e.g., "October")
  day: 'numeric',  // Day of the month as a number (e.g., 6)
};

// Format the date according to the options
const formattedDate = currentDate.toLocaleDateString('en-US', options);


app.get("/", (req, res) => {
  res.render("toDay.ejs", {formattedDate : formattedDate});
});

app.get("/work", (req, res) => {
  res.render("work.ejs");
});

app.listen(port, () => {
  console.log("App running on port", port);
});
