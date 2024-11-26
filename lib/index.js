const nodemailer = require("nodemailer");

exports.sendEmail = async (body, res, message) => {
  const transporter = nodemailer.createTransport({
    host: process.env.GMAIL_HOST,
    port: 587,
    secure: false,
    service: process.env.GMAIL_HOST,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  transporter.sendMail(body, (err) => {
    if (err) {
      console.log(err.message);
      return res.status(403).json({ message: "Error sending email" });
    }

    res.status(200).json({ message });
  });
};

exports.getFormattedUsd = async (gel) => {
  try {
    const response = await fetch(
      `https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json/?currencies=USD`
    );
    const usdData = await response.json();

    const usdRate = usdData[0].currencies[0].rate;

    const currencyToUsd = gel / usdRate;
    const formattedUsd = Math.round(currencyToUsd);

    return formattedUsd;
  } catch (e) {
    console.log(e);
    return;
  }
};

exports.applyDiscount = (priceObj, discount) => {
  if (!priceObj) return null;

  for (const key in priceObj.toObject()) {
    if (priceObj[key] && typeof priceObj[key] === "number") {
      priceObj[key] = priceObj[key] - (priceObj[key] * discount) / 100;
    }
  }
  return priceObj;
};

exports.convertToSnakeCase = (input) => {
  const numberMap = { 1: "one", 2: "two", 3: "three", 4: "four" };
  return input === "Full Day"
    ? "full_day"
    : input
        .toLowerCase()
        .replace(
          /(\d+)\s(\w+)/,
          (_, num, unit) =>
            `${numberMap[num] || num}_${unit.toLowerCase().replace(/s$/, "")}${
              num > 1 ? "s" : ""
            }`
        );
};
