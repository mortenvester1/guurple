

const Security = {
  forceHttpsOnly: (app) => {
    console.log(["Security.forceHttpsOnly"])
  },
  userAuth: (req, res, next) => {
    console.log("[Security.userAuth]");
    // Users.verifyToken(req.headers.authorization)
    //   .then((details) => {
    //     req.user = details;
    //     next();
    //   })
    //   .catch((reason) => {
    //     console.log(reason);
    //     res.send(buildResponse(403, "Unauthorized"));
    //   });
  },
};

module.exports = Security;
