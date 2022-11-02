// const mongoose = require("mongoose");
// const {expect} = require("chai");

// const User = require("../models/user");
// const feedController = require("../controllers/feed");
// const {databaseUrl} = require("../utils/database");


// describe("check than function for creating post", () => {
//   before(function (done) {
//     mongoose.connect(databaseUrl).then(() => {
//       const newUser = new User({
//         name: "userTest",
//         email: "userTest@mail.com",
//         password: "passwordTest",
//         posts: [],
//         _id: "5c0f66b979af55031b34728a", 
//       });
//       return newUser.save(done);
//     }).catch((err) => {
//       console.error("error in connecting or creating the user: \n", err);
//     });
//   });

//   after(function(done) {
//     User.deleteMany().then(() => {
//       mongoose.disconnect(done);
//     })
//   });

//   it("should create the new post or feed : ", function(done) {
//     const req = {
//       body: {
//         title: "test title",
//         content: "test content",
//       },
//       userId: "5c0f66b979af55031b34728a",
//       file: {
//         path: "main/image/test.something",
//       }
//     };

//     const res = {
//       statusCode: null,
//       message: "",
//       creator: null,
//       post: null,
//       status: function(code) {
//         return this.statusCode = code;
//       },
//       json: function (data){
//         this.post = data.post;
//         this.message = data.message;
//         this.creator = data.creator;
//         return this;
//       }
//     };

//     feedController.createPost(req, res, () => {}).then(() => {
//       User.findById("5c0f66b979af55031b34728a").then((user) => {
//         expect(user.posts).to.have.length(1);
//       })
//     })
//   });
  
// })