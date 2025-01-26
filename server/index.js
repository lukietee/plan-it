const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const bodyParser = require("body-parser");

// config() loads environment variables in process.env object (object built into node.js)
require("dotenv").config();

console.log(process.env.MONGODB_URI);

// Create a MongoClient to access the database
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connects to the database without closing the connection (doing so would be redundant for everyone making HTTP requests to server)
async function connectToDB() {
  try {
    // Connect the client to the server and send a ping
    await client.connect();
    // admin is a built-in database
    await client.db("admin").command({ ping: 1 });

    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.error("error: " + error);
  }
}
connectToDB();

// node.js runs top to bottom. Once the sever connects to mongoDB, locate the tailwind collection
const locationsCollection = client
  .db(process.env.MONGODB_DATABASE)
  .collection(process.env.MONGODB_COLLECTION_LOCATIONS);

const accountsCollection = client
  .db(process.env.MONGODB_DATABASE)
  .collection(process.env.MONGODB_COLLECTION_ACCOUNTS);

const app = express();
// allow client to make requests to server (allowing localhost at the moment)
// credentials set to true so front-end can send cookies to the server (for authentication purposes)
app.use(
  cors({
    origin: ["http://127.0.0.1:3000", "https://planithacks.vercel.app"],
    credentials: true,
  })
);

// Parse JSON bodies (content-type: application/json) req uired for POST requests
app.use(bodyParser.json());

// this test is going to take the content from the POST request body and send it back to the client
app.post("/test", async (req, res) => {
  const { content } = req.body;

  return res.send({ content });
});

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.listen(5001, async () => {
  console.log("Server listening on port 5001");
});


app.get("/test", async (req, res) => {
  jim = await accountsCollection.findOne({"first_name":"Jim"})

  console.log(jim)
  return res.send("Hello World!");
});

// Req data [email, password]
app.post("/createBusinessProfile", (req, res) => {
  const data    = req.body;
  const payload = { 
    email:    data.email, 
    password: data.password
  };

  locationsCollection.insertOne(payload, (err, res) => {
    if (err) throw err;
    console.log("1 document inserted.");
  });
});

// Req data [email , name, address, operating_hours, type, description, price_range, phone_number, preferences]
app.post("/updateBusinessProfile", (req, res) => {
  const data    = req.body;
  const query   = data.email; 
  const payload = { 
    name:            data.name, 
    address:         data.address, 
    operating_hours: data.operating_hours, 
    type:            data.type, 
    description:     data.description, 
    price_range:     data.price, 
    phone_number:    data.phone_number, 
    preferences:     data.preferences
  };

  locationsCollection.updateOne(query, payload, (err, res) => {
    if (err) throw err;
    console.log("1 document updated.");
  });
});

app.get("/viewBusinessProfile", (req, res) => {
  const data  = req.body
  const query = {
    amusement_parks: data.interests.amusement_parks,
    beach:           data.interests.beach,
    cafe:            data.interests.cafe,
    food:            data.interests.food,
    historical:      data.interests.historical,
    shopping:        data.interests.shopping,
    concerts_shows:  data.interests.concerts_shows,
    nature_hiking:   data.interests.nature_hiking,
    movies:          data.interests.movies,
    board_games:     data.interests.board_games,
    gaming:          data.interests.gaming,
    puzzles:         data.interests.puzzles,
    escape_rooms:    data.interests.escape_rooms
  };
    
  locationsCollection.find(query).toArray((err, result => {
    res.send(result);
    if (err) throw err;
    console.log("List of locations returned.");
  }))
});