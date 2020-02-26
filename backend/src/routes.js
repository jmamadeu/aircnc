const routes = require("express").Router();
const multer = require("multer");

const uploadConfig = require("./config/upload");

const upload = multer(uploadConfig);

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const Dashboardcontroller = require("./controllers/Dashboardcontroller");
const BookingController = require("./controllers/BookingController");

routes.post("/sessions", SessionController.store);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/spots", SpotController.index);
routes.get("/dashboard", Dashboardcontroller.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);
routes.delete("/bookings/:id", BookingController.destroy);

module.exports = routes;
