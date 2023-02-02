import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// routing
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
    name: "Neil Pilarcs",
    age: 28,
    isDisplayName: false,
    isAgeEnabled: false,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Me", description: "lorem dynamic" });
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    title: "Dashboard Confessional",
    isListEnabled: false,
  });
});

app.get("/each/helper", (req, res) => {
  res.render("contact", {
    title: "Each Helper",
    people: ["James", "Peter", "Anna", "Neil"],
    user: {
      username: "Neilly28",
      age: 19,
      phone: 123456789,
    },
    lists: [
      { items: ["Mango", "Banana", "Orange"] },
      {
        items: ["Potatos", "Avocado", "Onions"],
      },
    ],
  });
});

// starting the server
app.listen(8080, () => {
  console.log("listening from port", 8080);
});
