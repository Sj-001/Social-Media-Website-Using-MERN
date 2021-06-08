const mydb = require("../database/db");

class Profile {
  constructor({ username, name, password }) {
    this.user_id = mydb.profiles.count();
    this.username = username;
    this.name = name;
    this.password = password;
    this.followers = 0;
    this.following = 0;
    this.type = "public";
  }

  static createProfile(user) {
    mydb.collection("profiles").insertOne();
  }
}

module.exports = Profile;
