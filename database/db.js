const mongo = require("mongodb");
const fs = require("fs");

const client = mongo.MongoClient;
const url = "mongodb://localhost:27017/mydb";

var myClient = client.connect(url);
var mydb = myClient.db("my-app");

mydb.collections("profiles").drop();
mydb.collections("posts").drop();
mydb.collections("comments").drop();

mydb.createCollection("profiles");
mydb.createCollection("posts");
mydb.createCollection("comments");

fs.readFile("schema/profile.json", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }

  // parse JSON object
  const profile = JSON.parse(data.toString());
  mydb.runCommand(profile);
  // print JSON object
  console.log(profile);
});

fs.readFile("schema/post.json", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }

  // parse JSON object
  const post = JSON.parse(data.toString());
  mydb.runCommand(post);
  // print JSON object
  console.log(post);
});

fs.readFile("schema/comment.json", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }

  // parse JSON object
  const comment = JSON.parse(data.toString());
  mydb.runCommand(comment);
  // print JSON object
  console.log(comment);
});

// export { mydb };
