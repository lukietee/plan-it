const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const bodyParser = require("body-parser");

// config() loads environment variables in process.env object (object built into node.js)
require("dotenv").config();

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
  const data = {
    _id: { $oid: "67959b2b49c5496adbcdd13f" },
    first_name: "Jim",
    last_name: "Smith",
    email: "jsmith@gmail.com",
    amusement_parks: true,
    beach: true,
    cafe: true,
    food: true,
    historical: true,
    shopping: false,
    concerts_shows: true,
    nature_hiking: true,
    movies: false,
    board_games: true,
    gaming: false,
    puzzles: true,
    escape_rooms: true,
    diet: true,
    vegan: false,
    allergies: true,
    wheelchair: false,
    disability: false,
    phone_number: "3727388888",
    price_range: "luxary",
    address: "311 W Peltason Dr a, Irvine, CA 92697"
  }

  const query   = {email: data.email}; 
  const payload = { 
    first_name:      data.first_name, 
    last_name:       data.last_name,
    phone_number:    data.phone_number,
    address:         data.address, 

    interests:       {
      amusement_parks: data.amusement_parks,
      beach:           data.beach,
      cafe:            data.cafe,
      food:            data.food,
      historical:      data.historical,
      shopping:        data.shopping,
      concerts_shows:  data.concerts_shows,
      nature_hiking:   data.nature_hiking,
      movies:          data.movies,
      board_games:     data.board_games,
      gaming:          data.gaming,
      puzzles:         data.puzzles,
      escape_rooms:    data.escape_rooms,
    },

    price_range:     data.price_range,

    preferences:     {
      diet:            data.diet,
      vegan:           data.vegan,
      allergies:       data.allergies,
      wheelchair:      data.wheelchair,
      disability:      data.disability
    }
  };

  try {
    const result = await accountsCollection.updateOne(query, { $set: payload });
    console.log(`${result.modifiedCount} document(s) updated`);
    return res.send("Document updated successfully!");
  } catch (err) {
    console.error("Error updating document:", err);
    return res.status(500).send("Internal Server Error");
  }
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
    price_range:     data.price_range, 
    phone_number:    data.phone_number, 

    diet:            data.preferences.diet,
    vegan:           data.preferences.vegan,
    allergies:       data.preferences.allergies,
    wheelchair:      data.preferences.wheelchair,
    disability:      data.preferences.disability
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
    escape_rooms:    data.interests.escape_rooms,

    price_range:     data.price_range,

    diet:            data.preferences.diet,
    vegan:           data.preferences.vegan,
    allergies:       data.preferences.allergies,
    wheelchair:      data.preferences.wheelchair,
    disability:      data.preferences.disability
  };
    
  locationsCollection.find(query).toArray((err, result => {
    res.send(result);
    if (err) throw err;
    console.log("List of locations returned.");
  }))
});

// Req data [email, password]
app.post("/createUserProfile", (req, res) => {
  const data    = req.body;
  const payload = { 
    email:    data.email, 
    password: data.password
  };

  accountsCollection.insertOne(payload, (err, res) => {
    if (err) throw err;
    console.log("1 document inserted.");
  });
});

// Req data [email , name, address, operating_hours, type, description, price_range, phone_number, preferences]
app.post("/updateUserProfile", (req, res) => {
  const data    = req.body;
  const query   = data.email; 
  const payload = { 
    first_name:      data.first_name, 
    last_name:       data.last_name,
    phone_number:    data.phone_number,
    address:         data.address, 

    interests:       {
      amusement_parks: data.amusement_parks,
      beach:           data.beach,
      cafe:            data.cafe,
      food:            data.food,
      historical:      data.historical,
      shopping:        data.shopping,
      concerts_shows:  data.concerts_shows,
      nature_hiking:   data.nature_hiking,
      movies:          data.movies,
      board_games:     data.board_games,
      gaming:          data.gaming,
      puzzles:         data.puzzles,
      escape_rooms:    data.escape_rooms,
    },

    price_range:     data.price_range,

    preferences:     {
      diet:            data.diet,
      vegan:           data.vegan,
      allergies:       data.allergies,
      wheelchair:      data.wheelchair,
      disability:      data.disability
    }
  };

  accountsCollection.updateOne(query, payload, (err, res) => {
    if (err) throw err;
    console.log("1 document updated.");
  });
});