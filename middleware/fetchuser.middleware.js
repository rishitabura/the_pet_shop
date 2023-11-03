let jwt = require("jsonwebtoken");
function Response(success, msg, data) {
  let response = { success: success, msg: msg, data: data };
  return response;
}

const fetchUser = async (req, res, next) => {
    const { token } = req.body;
    //console.log(token);
  if (!token) {
    return res.status(401).send(Response(false, "Token not provided", {}));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // check from database
    //console.log("Id!?", decoded);
    next();
  } catch (err) {
    // console.log(err);
    return res.status(400).send(Response(false, "Invalid Token!", {}));
  }
};

module.exports = fetchUser;
