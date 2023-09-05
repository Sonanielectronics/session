const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.post("/", class1.a);
router.post("/Bet", class1.b);
router.get("/Login", class1.c);
router.post("/Create", class1.d);
router.post("/Otp", class1.e);
router.post("/Deposit", class1.f);
router.post("/withdraw", class1.g);
router.post("/Add", class1.h);
router.get("/Get", class1.j);
router.post("/GetLoginUser", class1.k);
router.get("/delete", class1.delete);

module.exports = router;
