const geoLunch = require("./public/lunch.json");
const geoVillage = require("./public/popeye-village-balluta.json");
const LunchModel = require("./models/lunch");
const VillageModel = require("./models/village");

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const WebSocket = require("ws");
const http = require("http");
const server = http.createServer(app);
const wss = new WebSocket.Server({ server: server });

app.use(express.json());
app.use(cors());

// API Routes ****** //

const villageRoutes = require("./routes/villageRoutes");
const lunchRoutes = require("./routes/lunchRoutes");
const foodRoutes = require("./routes/foodRoutes");

app.use(villageRoutes);
app.use(lunchRoutes);
app.use(foodRoutes);

// *************** //

// socket initializing & sending data to frontend //


wss.on("connection", function connection(ws) {
  console.log("recieved connection ");  


  ws.on("message", function message(event) {
    const step = event.toString();
    if (step< geoLunch.length){
    ws.send(JSON.stringify(["lunchLocation", geoLunch[step]]));
    }
    if (step<geoVillage.length){
    ws.send(JSON.stringify(["villageLocation", geoVillage[step]]));
    }
  });

  ws.send(JSON.stringify(["lunch", geoLunch]));
  ws.send(JSON.stringify(["village", geoVillage]));

});

// ***************** //

// socket initializing & sending data to frontend //

wss.on("message", function message(data) {
  console.log("received message", data);
});

// ***************** //

//  store the data in a mongo collection (if the data don’t already exist //

app.get("/", (req, res) => {
  try{

    const lunchModel = new LunchModel({
      title: "lunch",
      coordinates: geoLunch,
    });
    LunchModel.find().then((resolve) => {
      if (resolve.length === 0) {
        lunchModel.save().catch((err) => {
          console.log(err);
        });
      }
    });

  }catch(err){
    console.log('error',err)
  }

  try{

    const villageModel = new VillageModel({
      title: "village",
      coordinates: geoVillage,
    });
    VillageModel.find().then((resolve) => {
      if (resolve.length === 0) {
        villageModel.save().catch((err) => {
          console.log(err);
        });
      }
    });

  }catch(err){
    console.log('error',err)
  }
  
});

// ***************** //

server.listen(8000, () => {
  console.log("socket on port", 8000);
});

mongoose.connect(
  "mongodb+srv://root:rootpassword@cluster0.flikc.mongodb.net/popeyeRedAcre?retryWrites=true&w=majority",
  {
    usenewUrlParser: true,
  }
);
