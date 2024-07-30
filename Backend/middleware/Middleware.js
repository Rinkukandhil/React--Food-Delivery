import jwt from "jsonwebtoken";
function verifyTokenUser(req, res, next) {
  try {
    const bearerHeader = req.headers["authorization"];
    const bearerToken = bearerHeader.split(" ")[1];
    const secretKey = "myjsonwebtokenkeyuser";
    jwt.verify(bearerToken, secretKey, (err, authUser) => {
      if (err) {
        return res
          .status(500)
          .send({ status: false, message: "Error: Unauth User", err });
      } else {
        if (!authUser) {
          return res
            .status(500)
            .send({ status: false, message: "Error: Unauth User" });
        } else {
          next(); // invoke callback function
        }
      }
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: "Error: ", error });
  }
}

function verifyTokenAdmin(req, res, next) {
  try {
    const bearerHeader = req.headers["authorization"];
    const bearerToken = bearerHeader.split(" ")[1];
    const secretKey = "myjsonwebtokenkeyadmin";
    jwt.verify(bearerToken, secretKey, (err, authUser) => {
      if (err) {
        return res
          .status(500)
          .send({ status: false, message: "Error: Unauth User", err });
      } else {
        if (!authUser) {
          return res
            .status(500)
            .send({ status: false, message: "Error: Unauth User" });
        } else {
          next(); // invoke callback function
        }
      }
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: "Error: ", error });
  }
}

export default { verifyTokenAdmin, verifyTokenUser };
