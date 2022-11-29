const express = require("express");
const cors = require("cors");
let { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

const app = express();
app.use(cors());

const verifyjwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-e8ba64d3dqoriwyl.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "unique identifier",
  issuer: "https://dev-e8ba64d3dqoriwyl.us.auth0.com/",
  algorithms: ["RS256"],
}).unless({ path: ["/"] });

app.use(verifyjwt);

app.listen(4000, () => console.log("server on port 4000"));
