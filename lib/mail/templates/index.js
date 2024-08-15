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
