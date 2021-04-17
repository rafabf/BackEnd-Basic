const { request, response } = require("express");

const userGet = (req = request, res = response) => {
  //para pasar query
  const query = req.query;

  res.json({
    msg: "get api - controller",
  });
};

const userPost = (req, res = response) => {
  res.json({
    msg: "post api",
  });
};

const userPut = (req, res = response) => {
  //para pasar el id del user
  const id = req.params;

  res.json({
    msg: "put api",
  });
};

const userDelete = (req, res = response) => {
  res.json({
    msg: "delete api",
  });
};

const userPath = (req, res = response) => {
  res.json({
    msg: "Path api",
  });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
  userPath,
};
