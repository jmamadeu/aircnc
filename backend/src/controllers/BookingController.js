const Booking = require("../models/Booking");

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      date,
      user: user_id,
      spot: spot_id
    });

    await booking
      .populate("spot")
      .populate("user")
      .execPopulate();

    return res.json(booking);
  },
  async destroy(req, res) {
    const { id } = req.params;

    await Booking.deleteOne({ _id: id });

    return res.json({
      msg: "Deleted"
    });
  }
};
