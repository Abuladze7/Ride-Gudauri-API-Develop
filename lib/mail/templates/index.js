exports.skiLessonBookingTemplate = (body) => {
  const {
    name,
    lessonType,
    experience,
    groupMembers,
    hours,
    fromDate,
    toDate,
    fromHour,
    location,
    currency,
  } = body;

  const { usd, gel } = currency;

  const offTotalUSD = (usd * 15) / 100;
  const offTotalGEL = (gel * 15) / 100;

  return `<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .head-section {
        width: 100%;
      }

      .head-section .content {
        padding: 20px 24px;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
      }
      table {
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
      }

      .head-image-content {
        width: 100%;
      }

      .head-image-content .head-texts p {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-top: 12px;
      }

      .head-section .content img {
        width: 100px;
        border-radius: 20%;
      }

      .booking-section {
        width: 100%;
      }

      .total {
        margin-top: 24px;
      }

      .currencies {
        margin-top: 8px;
      }

      .currencies p {
        font-size: 25px;
        color: red;
      }

      .currencies p strong {
        font-size: 16px;
        color: #333;
      }

      .note-section {
        margin-top: 80px;
        width: 100%;
      }

      .note-section-content {
        max-width: 1280px;
        width: 100%;
        margin: 0px auto;
        padding: 0px 24px;
      }

      .important-information-section {
        width: 100%;
        margin-top: 80px;
      }

      .information-content {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 0 24px;
      }
    </style>
  </head>

  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0">
    <div class="head-section">
      <div class="content">
        <div class="head-image-content">
          <img
            src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723704073/gudauri-logo_citqv4.jpg"
            alt="gudauri-logo"
          />

          <div class="head-texts">
            <p>Dear ${name}</p>
            <p>Thank you for booking a ski lesson with Ride Gudauri!</p>
            <p>
              We are excited to help you enjoy an unforgettable skiing
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="booking-section">
      <div
        style="
          padding: 0px 24px;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
        "
      >
        <div class="table-wrapper">
          <h2 style="font-size: 28px; margin-bottom: 16px">Booking Details:</h2>
          <table style="width: 100%; font-size: 16px; color: #333">
            <tr>
              <td>Name:</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td>Lesson Date:</td>
              <td>${fromDate}</td>
            </tr>
            <tr>
              <td>Lesson Time:</td>
              <td>${fromHour}</td>
            </tr>
            <tr>
              <td>Lesson Type:</td>
              <td>${lessonType}</td>
            </tr>
            ${
              groupMembers
                ? `<tr>
                  <td>Group Members:</td>
                  <td>${groupMembers}</td>
                </tr>`
                : ""
            }
            <tr>
              <td>Lesson Level:</td>
              <td>${experience}</td>
            </tr>
            <tr>
              <td>Duration:</td>
              <td>${hours}</td>
            </tr>
            <tr>
              <td>Meeting Location:</td>
              <td>${location}</td>
            </tr>
          </table>
          <div class="total">
            <h2>Final Cost:</h2>
            <div class="currencies">
              <p><strong>Total amount (in GEL): </strong> ${gel}₾</p>
              <p><strong>Total amount (in USD): </strong> ${usd}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="note-section">
      <div class="note-section-content">
        <h1 style="font-size: 28px; color: red">PLEASE NOTE</h1>
        <p style="margin-top: 16px">
          To complete your booking, 15% of the full amount should be transferred
          to the account information provided below:
        </p>

        <p style="margin-top: 16px">
          <strong>Amount to Transfer: [15% of total amount] </strong>
          ${offTotalGEL} GEL / ${offTotalUSD} USD
        </p>

        <div class="invoice" style="margin-top: 24px">
          <h2 style="font-size: 28px">Invoice</h2>
          <table style="width: 100%; margin-top: 16px">
            <tr>
              <th>Total Amount</th>
              <th>Amount to Transfer</th>
              <th>Account Information</th>
            </tr>
            <tr>
              <td>${usd}$ USD</td>
              <td>15%</td>
              <td>${offTotalUSD} USD</td>
            </tr>
          </table>
        </div>
        <p style="margin-top: 44px">
          <strong
            >Account Information: (Please refer to the attached file for the
            detailed bank requisites)
          </strong>
        </p>
      </div>
    </div>
    <div class="important-information-section">
      <div class="information-content">
        <strong>Important Information: </strong>

        <ul style="padding: 24px">
          <li>
            To confirm your booking more quickly, please send us a
            <b> screenshot of the transaction </b>
            once the transfer is completed. This will allow us to proceed
            without waiting the 3 business days it takes for us to receive the
            payment.
          </li>
          <li style="margin-top: 12px">
            We might need to contact you 1-3 business days before your scheduled
            lesson to provide specific information about some necessary details.
            This contact will be made through <b>WhatsApp</b>, so please ensure
            that the phone number you provided on our website is correct and
            up-to-date.
          </li>
        </ul>

        <p style="margin-top: 18px">
          If you have any questions or need to update your contact information,
          please do not hesitate to reach out to us at info@ridegudauri.com or
          +995 591 144 114. We look forward to seeing you on the slopes!
        </p>

        <p style="margin-top: 18px">Best regards,</p>
        <p style="margin-top: 18px">Ride Gudauri Team</p>
      </div>
    </div>
  </body>
</html>
`;
};

exports.snowboardLessonBookingTemplate = (body) => {
  const {
    name,
    lessonType,
    experience,
    groupMembers,
    hours,
    fromDate,
    toDate,
    fromHour,
    location,
    currency,
  } = body;

  const { usd, gel } = currency;

  const offTotalUSD = (usd * 15) / 100;
  const offTotalGEL = (gel * 15) / 100;

  return `<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .head-section {
        width: 100%;
      }

      .head-section .content {
        padding: 20px 24px;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
      }
      table {
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
      }

      .head-image-content {
        width: 100%;
      }

      .head-image-content .head-texts p {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-top: 12px;
      }

      .head-section .content img {
        width: 100px;
        border-radius: 20%;
      }

      .booking-section {
        width: 100%;
      }

      .total {
        margin-top: 24px;
      }

      .currencies {
        margin-top: 8px;
      }

      .currencies p {
        font-size: 25px;
        color: red;
      }

      .currencies p strong {
        font-size: 16px;
        color: #333;
      }

      .note-section {
        margin-top: 80px;
        width: 100%;
      }

      .note-section-content {
        max-width: 1280px;
        width: 100%;
        margin: 0px auto;
        padding: 0px 24px;
      }

      .important-information-section {
        width: 100%;
        margin-top: 80px;
      }

      .information-content {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 0 24px;
      }
    </style>
  </head>

  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0">
    <div class="head-section">
      <div class="content">
        <div class="head-image-content">
          <img
            src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723704073/gudauri-logo_citqv4.jpg"
            alt="gudauri-logo"
          />

          <div class="head-texts">
            <p>Dear ${name}</p>
            <p>Thank you for booking a snowboarding lesson with Ride Gudauri!</p>
            <p>We are excited to help you enjoy an unforgettable experience.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="booking-section">
      <div
        style="
          padding: 0px 24px;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
        "
      >
        <div class="table-wrapper">
          <h2 style="font-size: 28px; margin-bottom: 16px">Booking Details:</h2>
          <table style="width: 100%; font-size: 16px; color: #333">
            <tr>
              <td>Name:</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td>Lesson Date:</td>
              <td>${fromDate}</td>
            </tr>
            <tr>
              <td>Lesson Time:</td>
              <td>${fromHour}</td>
            </tr>
            <tr>
              <td>Lesson Type:</td>
              <td>${lessonType}</td>
            </tr>
            ${
              groupMembers
                ? `<tr>
                  <td>Group Members:</td>
                  <td>${groupMembers}</td>
                </tr>`
                : ""
            }
            <tr>
              <td>Lesson Level:</td>
              <td>${experience}</td>
            </tr>
            <tr>
              <td>Lesson Duration:</td>
              <td>${hours}</td>
            </tr>
            <tr>
              <td>Meeting Location:</td>
              <td>${location}</td>
            </tr>
          </table>
          <div class="total">
            <h2>Final Cost:</h2>
            <div class="currencies">
              <p><strong>Total amount (in GEL): </strong> ${gel}₾</p>
              <p><strong>Total amount (in USD): </strong> ${usd}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="note-section">
      <div class="note-section-content">
        <h1 style="font-size: 28px; color: red">PLEASE NOTE</h1>
        <p style="margin-top: 16px">
          To complete your booking, 15% of the full amount should be transferred
          to the account information provided below:
        </p>

        <p style="margin-top: 16px">
          <strong>Amount to Transfer: [15% of total amount] </strong>
          ${offTotalGEL} GEL / ${offTotalUSD} USD
        </p>

        <div class="invoice" style="margin-top: 24px">
          <h2 style="font-size: 28px">Invoice</h2>
          <table style="width: 100%; margin-top: 16px">
            <tr>
              <th>Total Amount</th>
              <th>Amount to Transfer</th>
              <th>Account Information</th>
            </tr>
            <tr>
              <td>${gel}₾ USD</td>
              <td>15%</td>
              <td>${offTotalUSD} USD</td>
            </tr>
          </table>
        </div>
        <p style="margin-top: 44px">
          <strong
            >Account Information: (Please refer to the attached file for the
            detailed bank requisites)
          </strong>
        </p>
      </div>
    </div>
    <div class="important-information-section">
      <div class="information-content">
        <strong>Important Information: </strong>

        <ul style="padding: 24px">
          <li>
            To confirm your booking more quickly, please send us a
            <b> screenshot of the transaction </b>
            once the transfer is completed. This will allow us to proceed
            without waiting the 3 business days it takes for us to receive the
            payment.
          </li>
          <li style="margin-top: 12px">
            We might need to contact you 1-3 business days before your scheduled
            lesson to provide specific information about some necessary details.
            This contact will be made through <b>WhatsApp</b>, so please ensure
            that the phone number you provided on our website is correct and
            up-to-date.
          </li>
        </ul>

        <p style="margin-top: 18px">
          If you have any questions or need to update your contact information,
          please do not hesitate to reach out to us at info@ridegudauri.com or
          +995 591 144 114. We look forward to seeing you on the slopes!
        </p>

        <p style="margin-top: 18px">Best regards,</p>
        <p style="margin-top: 18px">Ride Gudauri Team</p>
      </div>
    </div>
  </body>
</html>
`;
};

exports.paraglidingBookingTemplate = (body) => {
  const { fullName, date, time, participants, currency } = body;

  const { usd, gel } = currency;

  const offTotalUSD = (usd * 15) / 100;
  const offTotalGEL = (gel * 15) / 100;

  return `<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .head-section {
        width: 100%;
      }

      .head-section .content {
        padding: 20px 24px;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
      }
      table {
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
      }

      .head-image-content {
        width: 100%;
      }

      .head-image-content .head-texts p {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-top: 12px;
      }

      .head-section .content img {
        width: 100px;
        border-radius: 20%;
      }

      .booking-section {
        width: 100%;
      }

      .total {
        margin-top: 24px;
      }

      .currencies {
        margin-top: 8px;
      }

      .currencies p {
        font-size: 25px;
        color: red;
      }

      .currencies p strong {
        font-size: 16px;
        color: #333;
      }

      .note-section {
        margin-top: 80px;
        width: 100%;
      }

      .note-section-content {
        max-width: 1280px;
        width: 100%;
        margin: 0px auto;
        padding: 0px 24px;
      }

      .important-information-section {
        width: 100%;
        margin-top: 80px;
      }

      .information-content {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 0 24px;
      }
    </style>
  </head>

  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0">
    <div class="head-section">
      <div class="content">
        <div class="head-image-content">
          <img
            src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723704073/gudauri-logo_citqv4.jpg"
            alt="gudauri-logo"
          />

          <div class="head-texts">
            <p>Dear ${fullName}</p>
            <p>
              Thank you for choosing Ride Gudauri for your Paragliding
              experience!
            </p>
            <p>We are excited to help you enjoy an unforgettable adventure.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="booking-section">
      <div
        style="
          padding: 0px 24px;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
        "
      >
        <div class="table-wrapper">
          <h2 style="font-size: 28px; margin-bottom: 16px">Booking Details:</h2>
          <table style="width: 100%; font-size: 16px; color: #333">
            <tr>
              <td>Name:</td>
              <td>${fullName}</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>${date}</td>
            </tr>
            <tr>
              <td>Time:</td>
              <td>${time}</td>
            </tr>
            <tr>
              <td>Duration:</td>
              <td>10 - 15 min</td>
            </tr>
            <tr>
              <td>Lesson Level:</td>
              <td>${participants}</td>
            </tr>
          </table>
          <div class="total">
            <h2>Final Cost:</h2>
            <div class="currencies">
              <p><strong>Total amount (in GEL): </strong> ${gel}₾</p>
              <p><strong>Total amount (in USD): </strong> ${usd}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="note-section">
      <div class="note-section-content">
        <h1 style="font-size: 28px; color: red">PLEASE NOTE</h1>
        <p style="margin-top: 16px">
          To complete your booking, 15% of the full amount should be transferred
          to the account information provided below:
        </p>

        <p style="margin-top: 16px">
          <strong>Amount to Transfer: [15% of total amount] </strong>
          ${offTotalGEL} GEL / ${offTotalUSD} USD
        </p>

        <div class="invoice" style="margin-top: 24px">
          <h2 style="font-size: 28px">Invoice</h2>
          <table style="width: 100%; margin-top: 16px">
            <tr>
              <th>Total Amount</th>
              <th>Amount to Transfer</th>
              <th>Account Information</th>
            </tr>
            <tr>
              <td>${usd}$ USD</td>
              <td>15%</td>
              <td>${offTotalUSD} USD</td>
            </tr>
          </table>
        </div>
        <p style="margin-top: 44px">
          <strong
            >Account Information: (Please refer to the attached file for the
            detailed bank requisites)
          </strong>
        </p>
      </div>
    </div>
    <div class="important-information-section">
      <div class="information-content">
        <strong>Important Information: </strong>

        <ul style="padding: 24px">
          <li>
            To confirm your booking more quickly, please send us a
            <b> screenshot of the transaction </b>
            once the transfer is completed. This will allow us to proceed
            without waiting the 3 business days it takes for us to receive the
            payment.
          </li>
          <li style="margin-top: 12px">
            We might need to contact you 1-3 business days before your scheduled
            lesson to provide specific information about some necessary details.
            This contact will be made through <b>WhatsApp</b>, so please ensure
            that the phone number you provided on our website is correct and
            up-to-date.
          </li>
        </ul>

        <p style="margin-top: 18px">
          If you have any questions or need to update your contact information,
          please do not hesitate to reach out to us at info@ridegudauri.com or
          +995 591 144 114. We look forward to seeing you on the slopes!
        </p>

        <p style="margin-top: 18px">Best regards,</p>
        <p style="margin-top: 18px">Ride Gudauri Team</p>
      </div>
    </div>
  </body>
</html>
`;
};

exports.quadBikeBookingTemplate = (body) => {
  const { fullName, date, time, participants, currency, selector } = body;

  const { usd, gel } = currency;
  const offTotalUSD = (usd * 10) / 100;
  const offTotalGEL = (gel * 10) / 100;

  return `<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .head-section {
        width: 100%;
      }

      .head-section .content {
        padding: 20px 24px;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
      }
      table {
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
      }

      .head-image-content {
        width: 100%;
      }

      .head-image-content .head-texts p {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-top: 12px;
      }

      .head-section .content img {
        width: 100px;
        border-radius: 20%;
      }

      .booking-section {
        width: 100%;
      }

      .total {
        margin-top: 24px;
      }

      .currencies {
        margin-top: 8px;
      }

      .currencies p {
        font-size: 25px;
        color: red;
      }

      .currencies p strong {
        font-size: 16px;
        color: #333;
      }

      .note-section {
        margin-top: 80px;
        width: 100%;
      }

      .note-section-content {
        max-width: 1280px;
        width: 100%;
        margin: 0px auto;
        padding: 0px 24px;
      }

      .important-information-section {
        width: 100%;
        margin-top: 80px;
      }

      .information-content {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 0 24px;
      }
    </style>
  </head>

  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0">
    <div class="head-section">
      <div class="content">
        <div class="head-image-content">
          <img
            src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723704073/gudauri-logo_citqv4.jpg"
            alt="gudauri-logo"
          />

          <div class="head-texts">
            <p>Dear ${fullName}</p>
            <p>Thank you for booking Quad Bikes with Ride Gudauri!</p>
            <p>We are excited to help you enjoy a thrilling experience.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="booking-section">
      <div
        style="
          padding: 0px 24px;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
        "
      >
        <div class="table-wrapper">
          <h2 style="font-size: 28px; margin-bottom: 16px">Booking Details:</h2>
          <table style="width: 100%; font-size: 16px; color: #333">
            <tr>
              <td>Name:</td>
              <td>${fullName}</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>${date}</td>
            </tr>
            <tr>
              <td>Time:</td>
              <td>${time}</td>
            </tr>
            <tr>
              <td>Amount of Quads:</td>
              <td>${participants}</td>
            </tr>
            <tr>
              <td>Type of Transport:</td>
              <td>${selector}</td>
            </tr>
          </table>
          <div class="total">
            <h2>Final Cost:</h2>
            <div class="currencies">
              <p><strong>Total amount (in GEL): </strong> ${gel}₾₾</p>
              <p><strong>Total amount (in USD): </strong> ${usd}$$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="note-section">
      <div class="note-section-content">
        <h1 style="font-size: 28px; color: red">PLEASE NOTE</h1>
        <p style="margin-top: 16px">
          To complete your booking, 10% of the full amount should be transferred
          to the account information provided below:
        </p>

        <p style="margin-top: 16px">
          <strong>Amount to Transfer: [10% of total amount] </strong>
          ${offTotalGEL} GEL / ${offTotalUSD} USD
        </p>

        <div class="invoice" style="margin-top: 24px">
          <h2 style="font-size: 28px">Invoice</h2>
          <table style="width: 100%; margin-top: 16px">
            <tr>
              <th>Total Amount</th>
              <th>Amount to Transfer</th>
              <th>Account Information</th>
            </tr>
            <tr>
              <td>${usd}$ USD</td>
              <td>10%</td>
              <td>${offTotalUSD} USD</td>
            </tr>
          </table>
        </div>
        <p style="margin-top: 44px">
          <strong
            >Account Information: (Please refer to the attached file for the
            detailed bank requisites)
          </strong>
        </p>
      </div>
    </div>
    <div class="important-information-section">
      <div class="information-content">
        <strong>Important Information: </strong>

        <ul style="padding: 24px">
          <li>
            To confirm your booking more quickly, please send us a
            <b> screenshot of the transaction </b>
            once the transfer is completed. This will allow us to proceed
            without waiting the 3 business days it takes for us to receive the
            payment.
          </li>
          <li style="margin-top: 12px">
            We might need to contact you 1-3 business days before your scheduled
            lesson to provide specific information about some necessary details.
            This contact will be made through <b>WhatsApp</b>, so please ensure
            that the phone number you provided on our website is correct and
            up-to-date.
          </li>
        </ul>

        <p style="margin-top: 18px">
          If you have any questions or need to update your contact information,
          please do not hesitate to reach out to us at info@ridegudauri.com or
          +995 591 144 114. We look forward to seeing you on the slopes!
        </p>

        <p style="margin-top: 18px">Best regards,</p>
        <p style="margin-top: 18px">Ride Gudauri Team</p>
      </div>
    </div>
  </body>
</html>
`;
};

exports.horseRidingBookingTemplate = (body) => {
  const { fullName, date, time, participants, currency, selector } = body;

  const { usd, gel } = currency;

  return `<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .head-section {
        width: 100%;
      }

      .head-section .content {
        padding: 20px 24px;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
      }
      table {
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
      }

      .head-image-content {
        width: 100%;
      }

      .head-image-content .head-texts p {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-top: 12px;
      }

      .head-section .content img {
        width: 100px;
        border-radius: 20%;
      }

      .booking-section {
        width: 100%;
      }

      .total {
        margin-top: 24px;
      }

      .currencies {
        margin-top: 8px;
      }

      .currencies p {
        font-size: 25px;
        color: red;
      }

      .currencies p strong {
        font-size: 16px;
        color: #333;
      }

      .note-section {
        margin-top: 80px;
        width: 100%;
      }

      .note-section-content {
        max-width: 1280px;
        width: 100%;
        margin: 0px auto;
        padding: 0px 24px;
      }

      .important-information-section {
        width: 100%;
        margin-top: 80px;
      }

      .information-content {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 0 24px;
      }
    </style>
  </head>

  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0">
    <div class="head-section">
      <div class="content">
        <div class="head-image-content">
          <img
            src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723704073/gudauri-logo_citqv4.jpg"
            alt="gudauri-logo"
          />

          <div class="head-texts">
            <p>Dear ${fullName}</p>
            <p>
              Thank you for booking a Horse Riding experience with Ride Gudauri!
            </p>
            <p>We are excited to help you enjoy this exciting adventure.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="booking-section">
      <div
        style="
          padding: 0px 24px;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
        "
      >
        <div class="table-wrapper">
          <h2 style="font-size: 28px; margin-bottom: 16px">Booking Details:</h2>
          <table style="width: 100%; font-size: 16px; color: #333">
            <tr>
              <td>Name:</td>
              <td>${fullName}</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>${date}</td>
            </tr>
            <tr>
              <td>Time:</td>
              <td>${time}</td>
            </tr>
            <tr>
              <td>Amount of Participants:</td>
              <td>${participants}</td>
            </tr>
            <tr>
              <td>Duration:</td>
              <td>${selector}</td>
            </tr>
          </table>
          <div class="total">
            <h2>Final Cost:</h2>
            <div class="currencies">
              <p><strong>Total amount (in GEL): </strong> ${gel}₾₾</p>
              <p><strong>Total amount (in USD): </strong> ${usd}$$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="note-section">
      <div class="note-section-content">
        <p>No need for previous payment request</p>
      </div>
    </div>
    <div class="important-information-section">
      <div class="information-content">
        <p>
          <strong>Important Information: </strong>
          We might need to contact you 1-3 business days before your scheduled
          session to provide specific information about the meeting location and
          any other necessary details. This contact will be made through
          WhatsApp, so please ensure that the phone number you provided on our
          website is correct and up-to-date.
        </p>

        <p style="margin-top: 18px">
          If you have any questions or need to update your contact information,
          please do not hesitate to reach out to us at info@ridegudauri.com or
          +995 591 144 114.
        </p>

        <p style="margin-top: 18px">We look forward to seeing you!</p>
        <p style="margin-top: 18px">Best regards,</p>
        <p style="margin-top: 18px">Ride Gudauri Team</p>
      </div>
    </div>
  </body>
</html>
`;
};

exports.snowmobileBookingTemplate = (body) => {
  const { fullName, date, time, participants, currency, selector } = body;

  const { usd, gel } = currency;
  const offTotalUSD = (usd * 10) / 100;
  const offTotalGEL = (gel * 10) / 100;

  return `
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .head-section {
        width: 100%;
      }

      .head-section .content {
        padding: 20px 24px;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
      }
      table {
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
      }

      .head-image-content {
        width: 100%;
      }

      .head-image-content .head-texts p {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-top: 12px;
      }

      .head-section .content img {
        width: 100px;
        border-radius: 20%;
      }

      .booking-section {
        width: 100%;
      }

      .total {
        margin-top: 24px;
      }

      .currencies {
        margin-top: 8px;
      }

      .currencies p {
        font-size: 25px;
        color: red;
      }

      .currencies p strong {
        font-size: 16px;
        color: #333;
      }

      .note-section {
        margin-top: 80px;
        width: 100%;
      }

      .note-section-content {
        max-width: 1280px;
        width: 100%;
        margin: 0px auto;
        padding: 0px 24px;
      }

      .important-information-section {
        width: 100%;
        margin-top: 80px;
      }

      .information-content {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 0 24px;
      }
    </style>
  </head>

  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0">
    <div class="head-section">
      <div class="content">
        <div class="head-image-content">
          <img
            src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723704073/gudauri-logo_citqv4.jpg"
            alt="gudauri-logo"
          />

          <div class="head-texts">
            <p>Dear ${fullName}</p>
            <p>Thank you for booking Quad Bikes with Ride Gudauri!</p>
            <p>We are excited to help you enjoy a thrilling experience.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="booking-section">
      <div
        style="
          padding: 0px 24px;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
        "
      >
        <div class="table-wrapper">
          <h2 style="font-size: 28px; margin-bottom: 16px">Booking Details:</h2>
          <table style="width: 100%; font-size: 16px; color: #333">
            <tr>
              <td>Name:</td>
              <td>${fullName}</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>${date}</td>
            </tr>
            <tr>
              <td>Time:</td>
              <td>${time}</td>
            </tr>
            <tr>
              <td>Duration:</td>
              <td>${selector}</td>
            </tr>
            <tr>
              <td>Amount of Participants:</td>
              <td>${participants}</td>
            </tr>
          </table>
          <div class="total">
            <h2>Final Cost:</h2>
            <div class="currencies">
              <p><strong>Total amount (in GEL): </strong> ${gel}₾₾</p>
              <p><strong>Total amount (in USD): </strong> ${usd}$$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="note-section">
      <div class="note-section-content">
        <h1 style="font-size: 28px; color: red">PLEASE NOTE</h1>
        <p style="margin-top: 16px">
          To complete your booking, 10% of the full amount should be transferred
          to the account information provided below:
        </p>

        <p style="margin-top: 16px">
          <strong>Amount to Transfer: [10% of total amount] </strong>
          ${offTotalGEL} GEL / ${offTotalUSD} USD
        </p>

        <div class="invoice" style="margin-top: 24px">
          <h2 style="font-size: 28px">Invoice</h2>
          <table style="width: 100%; margin-top: 16px">
            <tr>
              <th>Total Amount</th>
              <th>Amount to Transfer</th>
              <th>Account Information</th>
            </tr>
            <tr>
              <td>${usd}$ USD</td>
              <td>10%</td>
              <td>${offTotalUSD} USD</td>
            </tr>
          </table>
        </div>
        <p style="margin-top: 44px">
          <strong
            >Account Information: (Please refer to the attached file for the
            detailed bank requisites)
          </strong>
        </p>
      </div>
    </div>
    <div class="important-information-section">
      <div class="information-content">
        <strong>Important Information: </strong>

        <ul style="padding: 24px">
          <li>
            To confirm your booking more quickly, please send us a
            <b> screenshot of the transaction </b>
            once the transfer is completed. This will allow us to proceed
            without waiting the 3 business days it takes for us to receive the
            payment.
          </li>
          <li style="margin-top: 12px">
            We might need to contact you 1-3 business days before your scheduled
            lesson to provide specific information about some necessary details.
            This contact will be made through <b>WhatsApp</b>, so please ensure
            that the phone number you provided on our website is correct and
            up-to-date.
          </li>
        </ul>

        <p style="margin-top: 18px">
          If you have any questions or need to update your contact information,
          please do not hesitate to reach out to us at info@ridegudauri.com or
          +995 591 144 114. We look forward to seeing you on the slopes!
        </p>

        <p style="margin-top: 18px">Best regards,</p>
        <p style="margin-top: 18px">Ride Gudauri Team</p>
      </div>
    </div>
  </body>
</html>
`;
};

exports.transferAndToursBookingTemplate = (body) => {
  const { fullName, date, time, participants, currency, selector } = body;

  const { usd, gel } = currency;
  const offTotalUSD = (usd * 10) / 100;
  const offTotalGEL = (gel * 10) / 100;

  return `<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .head-section {
        width: 100%;
      }

      .head-section .content {
        padding: 20px 24px;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
      }
      table {
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
      }

      .head-image-content {
        width: 100%;
      }

      .head-image-content .head-texts p {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-top: 12px;
      }

      .head-section .content img {
        width: 100px;
        border-radius: 20%;
      }

      .booking-section {
        width: 100%;
      }

      .total {
        margin-top: 24px;
      }

      .currencies {
        margin-top: 8px;
      }

      .currencies p {
        font-size: 25px;
        color: red;
      }

      .currencies p strong {
        font-size: 16px;
        color: #333;
      }

      .note-section {
        margin-top: 80px;
        width: 100%;
      }

      .note-section-content {
        max-width: 1280px;
        width: 100%;
        margin: 0px auto;
        padding: 0px 24px;
      }

      .important-information-section {
        width: 100%;
        margin-top: 80px;
      }

      .information-content {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 0 24px;
      }
    </style>
  </head>

  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0">
    <div class="head-section">
      <div class="content">
        <div class="head-image-content">
          <img
            src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723704073/gudauri-logo_citqv4.jpg"
            alt="gudauri-logo"
          />

          <div class="head-texts">
            <p>Dear ${fullName}</p>
            <p>
              Thank you for booking a transfer from Tbilisi to Gudauri with Ride
              Gudauri!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="booking-section">
      <div
        style="
          padding: 0px 24px;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
        "
      >
        <div class="table-wrapper">
          <h2 style="font-size: 28px; margin-bottom: 16px">Booking Details:</h2>
          <table style="width: 100%; font-size: 16px; color: #333">
            <tr>
              <td>Name:</td>
              <td>${fullName}</td>
            </tr>
            <tr>
              <td>Transfer Tour:</td>
              <td>${selector}</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>${date}</td>
            </tr>
            <tr>
              <td>Time:</td>
              <td>${time}</td>
            </tr>
            <tr>
              <td>Amount of Participants:</td>
              <td>${participants}</td>
            </tr>
          </table>
          <div class="total">
            <h2>Final Cost:</h2>
            <div class="currencies">
              <p><strong>Total amount (in GEL): </strong> ${gel}₾₾</p>
              <p><strong>Total amount (in USD): </strong> ${usd}$$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="note-section">
      <div class="note-section-content">
        <h1 style="font-size: 28px; color: red">PLEASE NOTE</h1>
        <p style="margin-top: 16px">
          To complete your booking, 10% of the full amount should be transferred
          to the account information provided below:
        </p>

        <p style="margin-top: 16px">
          <strong>Amount to Transfer: [10% of total amount] </strong>
          ${offTotalGEL} GEL / ${offTotalUSD} USD
        </p>

        <div class="invoice" style="margin-top: 24px">
          <h2 style="font-size: 28px">Invoice</h2>
          <table style="width: 100%; margin-top: 16px">
            <tr>
              <th>Total Amount</th>
              <th>Amount to Transfer</th>
              <th>Account Information</th>
            </tr>
            <tr>
              <td>${usd}$ USD</td>
              <td>10%</td>
              <td>${offTotalUSD} USD</td>
            </tr>
          </table>
        </div>
        <p style="margin-top: 44px">
          <strong
            >Account Information: (Please refer to the attached file for the
            detailed bank requisites)
          </strong>
        </p>
      </div>
    </div>
    <div class="important-information-section">
      <div class="information-content">
        <strong>Important Information: </strong>

        <ul style="padding: 24px">
          <li>
            To confirm your booking more quickly, please send us a
            <b> screenshot of the transaction </b>
            once the transfer is completed. This will allow us to proceed
            without waiting the 3 business days it takes for us to receive the
            payment.
          </li>
          <li style="margin-top: 12px">
            We might need to contact you 1-3 business days before your scheduled
            lesson to provide specific information about some necessary details.
            This contact will be made through <b>WhatsApp</b>, so please ensure
            that the phone number you provided on our website is correct and
            up-to-date.
          </li>
        </ul>

        <p style="margin-top: 18px">
          If you have any questions or need to update your contact information,
          please do not hesitate to reach out to us at info@ridegudauri.com or
          +995 591 144 114. We look forward to seeing you on the slopes!
        </p>

        <p style="margin-top: 18px">Best regards,</p>
        <p style="margin-top: 18px">Ride Gudauri Team</p>
      </div>
    </div>
  </body>
</html>
`;
};

exports.subscriptionTemplate = (body) => {
  const {
    name,
    expire,
    skiLessonDiscount,
    snowboardDiscount,
    groupSkiLessonDiscount,
    groupSnowboardDiscount,
    paraglidingDiscount,
    transferToursDiscount,
    snowmobileDiscount,
    horseRidingDiscount,
    quadBikeDiscount,
  } = body;

  const date = new Date(expire);

  const formattedDate = Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  const expireTime = formattedDate.replace(",", "");

  return `<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .head-section {
        width: 100%;
      }

      .head-section .content {
        padding: 20px 24px;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
      }

      .head-image-content {
        width: 100%;
      }

      .head-image-content .head-texts p {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-top: 12px;
      }

      .head-section .content img {
        width: 100px;
        border-radius: 20%;
      }

      table {
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
      }
    </style>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0">
    <div class="head-section">
      <div class="content">
        <div class="head-image-content">
          <img
            src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723704073/gudauri-logo_citqv4.jpg"
            alt="gudauri-logo"
          />

          <div class="head-texts" style="margin-top: 20px">
            <h1>test email</h1>

            <p>
              Discount Coupon Code:
              <strong style="font-size: 25px; color: red">${name}</strong>
            </p>
            <p>
              Expire time:
              <strong style="font-size: 25px">${expireTime}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      style="padding: 0px 24px; max-width: 1280px; width: 100%; margin: 0 auto"
    >
      <div class="table-wrapper">
        <h2 style="font-size: 28px; margin-bottom: 16px">
          Discounted services:
        </h2>
        <table style="width: 100%; font-size: 16px; color: #333">
          <tr>
            <td>Individual Ski Lesson:</td>
            <td>${skiLessonDiscount}% OFF</td>
          </tr>
          <tr>
            <td>Individual Snowboard Lesson:</td>
            <td>${snowboardDiscount}% OFF</td>
          </tr>
          <tr>
            <td>Group Ski Lesson:</td>
            <td>${groupSkiLessonDiscount}% OFF</td>
          </tr>
          <tr>
            <td>Group Snowboard Lesson:</td>
            <td>${groupSnowboardDiscount}% OFF</td>
          </tr>
          <tr>
            <td>Paragliding:</td>
            <td>${paraglidingDiscount}% OFF</td>
          </tr>
          <tr>
            <td>Transfer and Tours:</td>
            <td>${transferToursDiscount}% OFF</td>
          </tr>
          <tr>
            <td>Snowmobile:</td>
            <td>${snowmobileDiscount}% OFF</td>
          </tr>
          <tr>
            <td>Horse Riding:</td>
            <td>${horseRidingDiscount}% OFF</td>
          </tr>
          <tr>
            <td>Quad Bike:</td>
            <td>${quadBikeDiscount}% OFF</td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html>
`;
};

exports.subscriptionLetterTemplate = () => {
  return `<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
      rel="stylesheet"
    />
    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Rubik", sans-serif;
      }
      .ft00 {
        font-size: 22px;
        color: #f4f0e6;
      }
      .ft01 {
        font-size: 90px;
        font-weight: 900;
        color: #c74a26;
      }
      .ft02 {
        font-size: 24px;
        color: #c74a26;
      }
      .ft03 {
        font-size: 30px;
        color: #c74a26;
      }
      .ft04 {
        font-size: 21px;
        font-weight: 500;
        color: #3b312e;
      }
      .ft05 {
        font-size: 54px;
        font-weight: 900;
        color: #c74a26;
      }
      .ft06 {
        font-size: 24px;
        color: #3b312e;
      }
      .ft07 {
        font-size: 15px;
        color: #c74a26;
      }
      .ft08 {
        font-size: 22px;
        color: #3b312e;
      }
      .ft09 {
        font-size: 30px;
        color: #c74a26;
      }
      a {
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div
      id="page1-div"
      style="position: relative; max-width: 893px; width: 100%; margin: auto"
    >
      <img
        width="893"
        height="1263"
        src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723801264/newsletter001_hcypdi.png"
        alt="background image"
      />
      <p
        style="
          position: absolute;
          top: 1191px;
          left: 344px;
          white-space: nowrap;
        "
        class="ft00"
      >
        <a
          style="text-decoration: none; color: white"
          href="https://www.ridegudauri.com/"
          ><b>VISIT&#160;OUR&#160;WEBSITE</b></a
        >
      </p>
      <p
        style="position: absolute; top: 126px; left: 147px; white-space: nowrap"
        class="ft01"
      >
        THANK&#160;YOU
      </p>
      <p
        style="position: absolute; top: 231px; left: 53px; white-space: nowrap"
        class="ft01"
      >
        FOR&#160;JOINING&#160;US!
      </p>
      <p
        style="position: absolute; top: 35px; left: 54px; white-space: nowrap"
        class="ft02"
      >
        Ride&#160;Gudauri&#160;Newsletter
      </p>
      <img
        style="
          position: absolute;
          top: 29px;
          left: 50%;
          width: 50px;
          height: 50px;
          border-radius: 15px;
          transform: translateX(-50%);
        "
        src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723704073/gudauri-logo_citqv4.jpg"
        alt="gudauri-logo"
      />
      <p
        style="position: absolute; top: 29px; left: 608px; white-space: nowrap"
        class="ft03"
      >
        <a href="https://www.ridegudauri.com/" style="color: #c74a26"
          ><b>ridegudauri.com</b></a
        >
      </p>
      <p
        style="position: absolute; top: 999px; left: 95px; white-space: nowrap"
        class="ft04"
      >
        As&#160;a&#160;thank&#160;you&#160;for&#160;joining&#160;us,&#160;here’s&#160;a&#160;little&#160;something&#160;to&#160;kickstart&#160;your&#160;first
      </p>
      <p
        style="
          position: absolute;
          top: 1030px;
          left: 393px;
          white-space: nowrap;
        "
        class="ft04"
      >
        adventure.&#160;
      </p>
      <p
        style="
          position: absolute;
          top: 1093px;
          left: 130px;
          white-space: nowrap;
        "
        class="ft04"
      >
        Use&#160;the&#160;code&#160;FIRSTRIDE&#160;on&#160;our&#160;website&#160;and&#160;enjoy&#160;15%&#160;off&#160;your&#160;first
      </p>
      <p
        style="
          position: absolute;
          top: 1125px;
          left: 404px;
          white-space: nowrap;
        "
        class="ft04"
      >
        booking.
      </p>
      <p
        style="position: absolute; top: 882px; left: 284px; white-space: nowrap"
        class="ft05"
      >
        FIRSTRIDE
      </p>
    </div>

    <div
      id="page2-div"
      style="position: relative; max-width: 893px; width: 100%; margin: auto"
    >
      <img
        width="893"
        height="1263"
        src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723801277/newsletter002_ovhglk.png"
        alt="background image"
      />
      <p
        style="position: absolute; top: 35px; left: 54px; white-space: nowrap"
        class="ft02"
      >
        Ride&#160;Gudauri&#160;Newsletter
      </p>
      <img
        style="
          position: absolute;
          top: 29px;
          left: 50%;
          width: 50px;
          height: 50px;
          border-radius: 15px;
          transform: translateX(-50%);
        "
        src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723704073/gudauri-logo_citqv4.jpg"
        alt="gudauri-logo"
      />
      <p
        style="position: absolute; top: 29px; left: 608px; white-space: nowrap"
        class="ft03"
      >
        <a href="https://www.ridegudauri.com/" style="color: #c74a26"
          >ridegudauri.com</a
        >
      </p>
      <p
        style="position: absolute; top: 126px; left: 147px; white-space: nowrap"
        class="ft01"
      >
        THANK&#160;YOU
      </p>
      <p
        style="position: absolute; top: 231px; left: 53px; white-space: nowrap"
        class="ft01"
      >
        FOR&#160;JOINING&#160;US!
      </p>
      <p
        style="position: absolute; top: 994px; left: 266px; white-space: nowrap"
        class="ft04"
      >
        Welcome&#160;to&#160;the&#160;Ride&#160;Gudauri&#160;family!&#160;
      </p>
      <p
        style="
          position: absolute;
          top: 1057px;
          left: 107px;
          white-space: nowrap;
        "
        class="ft04"
      >
        We're&#160;stoked&#160;to&#160;have&#160;you&#160;with&#160;us.&#160;Whether&#160;you’re&#160;here&#160;to&#160;hit&#160;the&#160;slopes,
      </p>
      <p
        style="position: absolute; top: 1088px; left: 94px; white-space: nowrap"
        class="ft04"
      >
        glide&#160;through&#160;the&#160;air,&#160;or&#160;just&#160;soak&#160;up&#160;the&#160;mountain&#160;vibes,&#160;you’re&#160;in&#160;the&#160;right
      </p>
      <p
        style="
          position: absolute;
          top: 1120px;
          left: 424px;
          white-space: nowrap;
        "
        class="ft04"
      >
        spot.
      </p>
      <p
        style="position: absolute; top: 882px; left: 242px; white-space: nowrap"
        class="ft05"
      >
        HEY&#160;THERE...
      </p>

      <p
        style="
          position: absolute;
          top: 1191px;
          left: 344px;
          white-space: nowrap;
        "
        class="ft00"
      >
        <a
          style="text-decoration: none; color: white"
          href="https://www.ridegudauri.com/"
          ><b>VISIT&#160;OUR&#160;WEBSITE</b></a
        >
      </p>
    </div>

    <div
      id="page3-div"
      style="position: relative; max-width: 893px; width: 100%; margin: auto"
    >
      <img
        width="893"
        height="1263"
        src="https://res.cloudinary.com/dmw14gcns/image/upload/v1723801285/newsletter003_nzh9sd.png"
        alt="background image"
      />
      <p
        style="position: absolute; top: 36px; left: 288px; white-space: nowrap"
        class="ft00"
      >
        Discover&#160;All&#160;the
      </p>
      <p
        style="position: absolute; top: 89px; left: 255px; white-space: nowrap"
        class="ft00"
      >
        Services&#160;We&#160;Offer!
      </p>
      <p
        style="position: absolute; top: 457px; left: 165px; white-space: nowrap"
        class="ft06"
      >
        PARAGLIDING
      </p>
      <p
        style="position: absolute; top: 457px; left: 579px; white-space: nowrap"
        class="ft06"
      >
        SKI&#160;SCHOOL
      </p>
      <p
        style="position: absolute; top: 828px; left: 145px; white-space: nowrap"
        class="ft06"
      >
        OTHER&#160;ACTIVITIES
      </p>
      <p
        style="position: absolute; top: 869px; left: 186px; white-space: nowrap"
        class="ft07"
      >
        <a
          href="https://www.ridegudauri.com/other-activities"
          style="color: #c74a26"
          ><b>FIND&#160;OUT&#160;MORE</b></a
        >
      </p>
      <p
        style="position: absolute; top: 824px; left: 528px; white-space: nowrap"
        class="ft06"
      >
        GUDAURI&#160;SKI&#160;RESORT
      </p>
      <p
        style="
          position: absolute;
          top: 1059px;
          left: 105px;
          white-space: nowrap;
        "
        class="ft08"
      >
        As&#160;always,&#160;thank&#160;you&#160;for&#160;being&#160;part&#160;of&#160;the&#160;Ride&#160;Gudauri&#160;community.
      </p>
      <p
        style="position: absolute; top: 1118px; left: 95px; white-space: nowrap"
        class="ft08"
      >
        Don't&#160;hesitate&#160;to&#160;reach&#160;out&#160;if&#160;you&#160;have&#160;any&#160;inquiries&#160;or&#160;thoughts&#160;or&#160;just
      </p>
      <p
        style="
          position: absolute;
          top: 1147px;
          left: 358px;
          white-space: nowrap;
        "
        class="ft08"
      >
        want&#160;to&#160;connect.&#160;
      </p>
      <p
        style="
          position: absolute;
          top: 1195px;
          left: 285px;
          white-space: nowrap;
        "
        class="ft09"
      >
        <a
          href="mailto:info@ridegudauri.com"
          style="color: #c74a26; font-weight: bold"
          >info@ridegudauri.com</a
        >
      </p>
      <p
        style="position: absolute; top: 492px; left: 186px; white-space: nowrap"
        class="ft07"
      >
        <a href="https://www.ridegudauri.com/paraplan" style="color: #c74a26"
          ><b>FIND&#160;OUT&#160;MORE</b></a
        >
      </p>
      <p
        style="position: absolute; top: 869px; left: 591px; white-space: nowrap"
        class="ft07"
      >
        <a href="https://www.ridegudauri.com/gudauri" style="color: #c74a26"
          ><b>FIND&#160;OUT&#160;MORE</b></a
        >
      </p>
      <p
        style="position: absolute; top: 492px; left: 590px; white-space: nowrap"
        class="ft07"
      >
        <a href="https://www.ridegudauri.com/ski-school" style="color: #c74a26"
          ><b>FIND&#160;OUT&#160;MORE</b></a
        >
      </p>
    </div>
  </body>
</html>
`;
};
