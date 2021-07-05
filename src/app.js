const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 6231;
const logger = require("./logger").child({
    module: "app"
});

// Version 1 Router
const v1 = require("./router/v1");

app.use(bodyParser.json());
app.use("/fliggy/v1/:discordId", v1);

const httpServer = app.listen(PORT, () => {
    logger.info(`Fliggy API listening on port ${PORT}!`)
});

module.exports = app;