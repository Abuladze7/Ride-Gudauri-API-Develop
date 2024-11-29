const ParaglidingBooking = require("../models/paragliding");
const SkischoolBooking = require("../models/skischool");
const OtheractivitiesBooking = require("../models/otherActivities");
const Contactmessages = require("../models/Contact");

exports.getAllData = async (req, res) => {
  try {
    const paraglidingBookings = await ParaglidingBooking.find();
    const skischoolBookings = await SkischoolBooking.find();
    const otherActivitiesBookings = await OtheractivitiesBooking.find();
    const contactmessages = await Contactmessages.find();

    const filterByDate = (bookings, startDate, endDate) => {
      return bookings.filter((e) => {
        const createdAtDate = new Date(e.createdAt);
        return createdAtDate >= startDate && createdAtDate < endDate;
      });
    };

    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfToday.getDate() - 1);

    const startOfThisMonth = new Date(startOfToday);
    startOfThisMonth.setDate(1);

    const startOfNextMonth = new Date(startOfThisMonth);
    startOfNextMonth.setMonth(startOfNextMonth.getMonth() + 1);

    const todayOrders = [
      ...filterByDate(paraglidingBookings, startOfToday, new Date()),
      ...filterByDate(skischoolBookings, startOfToday, new Date()),
      ...filterByDate(otherActivitiesBookings, startOfToday, new Date()),
    ];

    const yesterdayOrders = [
      ...filterByDate(paraglidingBookings, startOfYesterday, startOfToday),
      ...filterByDate(skischoolBookings, startOfYesterday, startOfToday),
      ...filterByDate(otherActivitiesBookings, startOfYesterday, startOfToday),
    ];

    const thisMonthOrders = [
      ...filterByDate(paraglidingBookings, startOfThisMonth, startOfNextMonth),
      ...filterByDate(skischoolBookings, startOfThisMonth, startOfNextMonth),
      ...filterByDate(
        otherActivitiesBookings,
        startOfThisMonth,
        startOfNextMonth
      ),
    ];

    const allTimeOrders = [
      ...paraglidingBookings,
      ...skischoolBookings,
      ...otherActivitiesBookings,
    ];

    const fullData = {
      paraglidingBookings,
      skischoolBookings,
      otherActivitiesBookings,
      contactmessages,
    };

    const allData = {
      todayOrders,
      yesterdayOrders,
      thisMonthOrders,
      allTimeOrders,
      fullData,
    };

    res.json(allData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
