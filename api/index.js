require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("../config/db");
const contactRoutes = require("../routes/contactRoutes");
const paraglidingBookingRoutes = require("../routes/paraglidingRoutes");
const skischoolBookingRoutes = require("../routes/skischoolRoutes");
const otheractivitiesRoutes = require("../routes/otheractivitiesRoutes");
const authRoutes = require("../routes/authRoutes");
const allDataRoutes = require("../routes/getalldataRoutes");
const activitiesManagement = require("../routes/activitiesmanagementRoutes");
const homePageRoutes = require("../routes/homePageRoutes");
const ourStoryRoutes = require("../routes/ourStoryRoutes");
const gudauriPageRoutes = require("../routes/gudauriPageRoutes");
const skiSchoolPageRoutes = require("../routes/skiSchoolPageRoutes");
const paraglidingPageRoutes = require("../routes/paraglidingPageRoutes");
const otherActivitiesPageRoutes = require("../routes/otherActivitiesPageRoutes");
const contactPageRoutes = require("../routes/contactPageRoutes");
const seoRoutes = require("../routes/seoRoutes");
const priceManagementRoutes = require("../routes/priceManagementRoutes");
const notificationRoutes = require("../routes/notificationRoutes");
const couponRoutes = require("../routes/couponRoutes");
const subscribePromotionRoutes = require("../routes/subscribePromotionRoutes");
const datesManagementRoutes = require("../routes/datesManagementRoutes");
const bookingServiceRoutes = require("../routes/bookingServiceRoutes");
const { swaggerUi, specs, CSS_URL, customCss } = require("../config/swagger");

connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// const corsOptions = {
//   origin: [
//     "http://localhost:3001/",
//     "http://localhost:3000/",
//     "http://localhost:5173/",
//     "https://www.ridegudauri.ge/",
//     "https://ridegudauri.ge/",
//     "https://admin.ridegudauri.ge/",
//     "https://api.ridegudauri.ge/",
//     "https://admin.ridegudauri.ge/",
//     "https://admin.ridegudauri.com/",
//   ],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// // Routesss

// app.use(cors(corsOptions));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { customCss, customCssUrl: CSS_URL })
);

app.use("/api/homePage", homePageRoutes);
app.use("/api/ourstory", ourStoryRoutes);
app.use("/api/gudauriPage", gudauriPageRoutes);
app.use("/api/skiSchoolPage", skiSchoolPageRoutes);
app.use("/api/paraglidingPage", paraglidingPageRoutes);
app.use("/api/otherActivitiesPage", otherActivitiesPageRoutes);
app.use("/api/contactPage", contactPageRoutes);
app.use("/api/pricemanagement", priceManagementRoutes);
app.use("/api/datesmanagement", datesManagementRoutes);
app.use("/api/bookingservices", bookingServiceRoutes);

app.use("/api/subscribe", subscribePromotionRoutes);
app.use("/api/coupon", couponRoutes);
app.use("/api/notification", notificationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/paragliding", paraglidingBookingRoutes);
app.use("/api/skischool", skischoolBookingRoutes);
app.use("/api/otheractivities", otheractivitiesRoutes);
app.use("/api/all", allDataRoutes);
app.use("/api/activitiesmanagement", activitiesManagement);
app.use("/api/seoSettings", seoRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/test", (req, res) => {
  console.log("Hello World!");
  res.json({ message: "POST POST POST" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
