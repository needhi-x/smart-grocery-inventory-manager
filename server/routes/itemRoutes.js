const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.post("/", auth, async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

router.put("/:id", auth, async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(item);
});

router.delete("/:id", auth, async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

router.get("/alerts", auth, async (req, res) => {
  const items = await Item.find();

  const alerts = items.filter((i) => {
    return (
      i.quantity <= i.minStock ||
      (i.expiryDate &&
        new Date(i.expiryDate) - new Date() < 3 * 24 * 60 * 60 * 1000)
    );
  });

  res.json(alerts);
});

module.exports = router;