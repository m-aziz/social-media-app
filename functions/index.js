const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require("./util/fbAuth");
const {
  getAllScreams,
  postOneScream,
  getScream,
} = require("./handlers/screams");

const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
} = require("./handlers/users");

//SCREAM ROUTES
//gets data for screams
app.get("/screams", getAllScreams);
//posts a scream from a user acc
app.post("/scream", FBAuth, postOneScream);
app.get("/scream/:screamId", getScream);
//TODO delete scream, like scream, unlike scream, comment on scream

//USER ROUTES
//signs up new user
app.post("/signup", signup);
//logins a user
app.post("/login", login);
//puts an image
app.post("/user/image", FBAuth, uploadImage);
//fills in profile related credentials
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
