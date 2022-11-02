const mongoose = require("mongoose");
const {expect} = require("chai");

const {databaseUrl} = require("../utils/database");

const User = require("../models/user");
const Post = require("../models/post");
const {createPost} = require("../controllers/feed");


describe("testing creating posts or feeds with try catch", () => {

  before(async () => {
    await mongoose.connect(databaseUrl);
    const newUser =  new User({
        name: "userTest",
        email: "userTest@mail.com",
        password: "passwordTest",
        posts: [],
        _id: "5c0f66b979af55031b34728a", 
      });
    await newUser.save();
  });

  it("should create new post or feed for our new user", async () => {
    const req = {
      body: {
        title: "test title",
        content: "test content",
      },
      userId: "5c0f66b979af55031b34728a",
      file: {
        path: "main/image/test.something",
      }
    };

    const res = {
      statusCode: null,
      message: "",
      creator: null,
      post: null,
      status: function(code) {
        return this.statusCode = code;
      },
      json: function (data){
        this.post = data.post;
        this.message = data.message;
        this.creator = data.creator;
        return this;
      }
    };
    await createPost(req, res, () => {});
    const findUser = await User.findById("5c0f66b979af55031b34728a");
    expect(findUser.posts).to.have.length(1);
  });

  after( async () => {
    await Post.deleteMany();
    await User.deleteMany();
    await mongoose.disconnect();
  })
  
});