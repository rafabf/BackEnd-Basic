const { Router } = require("express");
const {
  userGet,
  userPost,
  userPut,
  userPath,
  userDelete,
} = require("../controllers/user.controllers");

const router = Router();

router.get("/", userGet);

router.put("/:id", userPut);

router.post("/", userPost);

router.delete("/", userDelete);

router.patch("/", userPath);

module.exports = router;
