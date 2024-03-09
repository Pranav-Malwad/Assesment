const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { error } = req.body;
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });

    if (user)
      return res
        .status(409)
        .send({ message: "User with email already exists" });

    const salt = await bcrypt.genSalt(Number(8));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created Sucessfully " });
  } catch (error) {
    console.log("Error in registering the user");
    res.status(500).send({ message: "Internal Server error!" });
  }
});

module.exports = router;
