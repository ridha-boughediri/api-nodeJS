const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {


    // je prepare la requete autant qu objet 
    const { email,roles,groupe_id,password,fistname,lastname } = req.body;



  const siJesuisdeja = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (siJesuisdeja) {
    return res.status(409).json({ message:"mec tu es deja dans la metaverse de ridha "});
  }

  const newUser = new User({ mail,roles,groupe_id,password,fistname,lastname });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "vous ne pouvez pas vous inscrire !" });
  });

  if (savedUser) res.json({ message: "merci pour ton inscription " });
});

module.exports = router;

