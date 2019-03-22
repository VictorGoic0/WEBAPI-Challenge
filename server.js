const express = require("express");
const helmet = require("helmet");
const projectRouter = require("./projectRoute/index.js");
const actionRouter = require("./actionRoute/index.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

module.exports = server;
