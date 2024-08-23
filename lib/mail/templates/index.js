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

exports.subscriptionPromotionTemplate = () => {
  return `
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        width: 100%;
        font-family: "Rubik", sans-serif;
      }
      .section {
        max-width: 800px;
        width: 100%;
        margin: 12px auto;
        background-image: url(https://res.cloudinary.com/dmw14gcns/image/upload/v1724347790/image_123650291_se1wmy.jpg);
        background-size: contain;
        background-repeat: no-repeat;
      }

      @media (max-width: 1024px) {
        .section {
          background-size: cover;
          background-position: 20%;
        }
      }

      .section.last {
        background-image: unset;
        background: #a2b4c7;
      }

      .header {
        width: 100%;
        padding-top: 107px;
        padding-right: 12px;
        padding-left: 12px;
      }

      .header-text {
        max-width: 600px;
        width: 100%;
        margin: auto;
      }

      .footer {
        margin-top: 238px;
        width: 100%;
        background-color: #a2b4c7;
        padding: 0px 12px;
      }

      .button-type-banner {
        max-width: 300px;
        width: 100%;
        margin: auto;
        padding: 20px 32px;
        border: dashed 2px #a2b4c7;
        background: #e2e2e2;
      }

      .footer-button {
        padding-bottom: 32px;
      }

      .services-table {
        margin: auto;
        max-width: 500px;
        width: 100%;
        border-spacing: 0px 20px;
      }
    </style>
  </head>
  <body>
    <div class="section">
      <table style="width: 100%; padding: 24px 12px">
        <thead>
          <tr>
            <td align="start">
              <p style="color: #e56304; font-weight: 700">
                Ride Gudauri Newsletter
              </p>
            </td>
            <td align="end">
              <a
                href="https://ridegudauri.com"
                style="color: #e56304; font-weight: 700"
              >
                RIDEGUDAURI.COM
              </a>
            </td>
          </tr>
        </thead>
      </table>

      <div class="header">
        <div class="header-text">
          <table>
            <tbody>
              <tr>
                <td align="center">
                  <h1
                    style="
                      font-size: 52px;
                      line-height: 48px;
                      color: #e56304;
                      font-weight: 900;
                    "
                  >
                    THANK YOU FOR JOINING US!
                  </h1>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="footer">
        <div class="button-type-banner">
          <h2
            style="
              text-align: center;
              color: #e56304;
              font-size: 30px;
              font-weight: 900;
            "
          >
            FIRST RIDE
          </h2>
        </div>

        <table style="margin: 8px auto 16px auto">
          <tbody>
            <tr>
              <td align="center">
                <p
                  style="
                    font-size: 14px;
                    line-height: 24px;
                    font-weight: 900;
                    color: #3d3431;
                  "
                >
                  As a thank you for joining us, here’s a little something to
                  kickstart your first adventure.
                </p>
              </td>
            </tr>

            <tr>
              <td align="center">
                <p
                  style="
                    font-size: 14px;
                    line-height: 24px;
                    font-weight: 900;
                    color: #3d3431;
                  "
                >
                  Use the code FIRSTRIDE on our website and enjoy 15% off your
                  first booking.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="footer-button">
          <table style="margin: auto">
            <tbody>
              <tr>
                <td>
                  <a
                    style="
                      padding: 16px 24px;
                      background: #e56304;
                      border-radius: 30px;
                      color: white;
                      font-size: 16px;
                      line-height: 24px;
                      font-weight: 900;
                      letter-spacing: 0px;
                    "
                    href="https://ridegudauri.com"
                  >
                    VISIT OUR WEBSITE
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="section">
      <table style="width: 100%; padding: 24px 12px">
        <thead>
          <tr>
            <td align="start">
              <p style="color: #e56304; font-weight: 700">
                Ride Gudauri Newsletter
              </p>
            </td>
            <td align="end">
              <a
                href="https://ridegudauri.com"
                style="color: #e56304; font-weight: 700"
              >
                RIDEGUDAURI.COM
              </a>
            </td>
          </tr>
        </thead>
      </table>

      <div class="header">
        <div class="header-text">
          <table>
            <tbody>
              <tr>
                <td align="center">
                  <h1
                    style="
                      font-size: 52px;
                      line-height: 48px;
                      color: #e56304;
                      font-weight: 900;
                    "
                  >
                    THANK YOU FOR JOINING US!
                  </h1>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="footer">
        <div class="button-type-banner">
          <h2
            style="
              text-align: center;
              color: #e56304;
              font-size: 30px;
              font-weight: 900;
            "
          >
            HEY THERE...
          </h2>
        </div>

        <table style="margin: 8px auto 16px auto">
          <tbody>
            <tr>
              <td align="center">
                <p
                  style="
                    font-size: 14px;
                    line-height: 24px;
                    font-weight: 900;
                    color: #3d3431;
                  "
                >
                  Welcome to the Ride Gudauri family!
                </p>
              </td>
            </tr>

            <tr>
              <td align="center">
                <p
                  style="
                    font-size: 14px;
                    line-height: 24px;
                    font-weight: 900;
                    color: #3d3431;
                  "
                >
                  We're stoked to have you with us. Whether you’re here to hit
                  the slopes, glide through the air, or just soak up the
                  mountain vibes, you’re in the right spo
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="footer-button">
          <table style="margin: auto">
            <tbody>
              <tr>
                <td>
                  <a
                    style="
                      padding: 16px 24px;
                      background: #e56304;
                      border-radius: 30px;
                      color: white;
                      font-size: 16px;
                      line-height: 24px;
                      font-weight: 900;
                      letter-spacing: 0px;
                    "
                    href="https://ridegudauri.com"
                  >
                    VISIT OUR WEBSITE
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="section last">
      <table style="margin: auto">
        <tr>
          <td align="center">
            <h2
              style="
                font-size: 24px;
                line-height: 32px;
                font-weight: 500;
                color: #e56304;
              "
            >
              Discover All the Services We Offer!
            </h2>
          </td>
        </tr>
      </table>

      <div style="margin-top: 22px">
        <table class="services-table">
          <tbody>
            <tr>
              <td align="center">
                <img
                  src="https://res.cloudinary.com/dmw14gcns/image/upload/v1724404969/image_123650291_1_al9aen.jpg"
                  alt="paragliding-img"
                  style="max-width: 200px; width: 100%"
                  width="200"
                  height="160"
                />
                <div
                  style="
                    margin-top: 8px;
                    max-width: 200px;
                    width: 100%;
                    text-align: center;
                  "
                >
                  <p
                    style="
                      font-size: 16px;
                      line-height: 24px;
                      font-weight: 600;
                      color: #3d3431;
                    "
                  >
                    PARAGLIDING
                  </p>
                  <a
                    style="
                      color: #e56304;
                      font-size: 12px;
                      line-height: 20px;
                      font-weight: 600;
                    "
                    href="https://ridegudauri.com/paraplan"
                    >FIND OUT MORE</a
                  >
                </div>
              </td>

              <td align="center">
                <img
                  src="https://res.cloudinary.com/dmw14gcns/image/upload/v1724347810/image_123650291_1_mvvim4.jpg"
                  alt="paragliding-img"
                  style="max-width: 200px; width: 100%"
                  width="200"
                  height="160"
                />
                <div style="margin-top: 8px; width: 100%; text-align: center">
                  <p
                    style="
                      font-size: 16px;
                      line-height: 24px;
                      font-weight: 600;
                      color: #3d3431;
                    "
                  >
                    SKI SCHOOL
                  </p>
                  <a
                    style="
                      color: #e56304;
                      font-size: 12px;
                      line-height: 20px;
                      font-weight: 600;
                    "
                    href="https://ridegudauri.com/ski-school"
                    >FIND OUT MORE</a
                  >
                </div>
              </td>
            </tr>

            <tr>
              <td align="center">
                <img
                  src="https://res.cloudinary.com/dmw14gcns/image/upload/v1724347804/image_123650291_3_e34whi.jpg"
                  alt="paragliding-img"
                  style="max-width: 200px; width: 100%"
                  width="200"
                  height="160"
                />
                <div
                  style="
                    margin-top: 8px;
                    max-width: 200px;
                    width: 100%;
                    text-align: center;
                  "
                >
                  <p
                    style="
                      font-size: 16px;
                      line-height: 24px;
                      font-weight: 600;
                      color: #3d3431;
                    "
                  >
                    OTHER ACTIVITIES
                  </p>
                  <a
                    style="
                      color: #e56304;
                      font-size: 12px;
                      line-height: 20px;
                      font-weight: 600;
                    "
                    href="https://ridegudauri.com/other-activities"
                    >FIND OUT MORE</a
                  >
                </div>
              </td>

              <td align="center">
                <img
                  src="https://res.cloudinary.com/dmw14gcns/image/upload/v1724347799/image_123650291_2_tx7af2.jpg"
                  alt="paragliding-img"
                  style="max-width: 200px; width: 100%"
                  width="200"
                  height="160"
                />
                <div
                  style="
                    margin-top: 8px;
                    max-width: 200px;
                    width: 100%;
                    text-align: center;
                  "
                >
                  <p
                    style="
                      font-size: 16px;
                      line-height: 24px;
                      font-weight: 600;
                      color: #3d3431;
                    "
                  >
                    GUDAURI SKI RESORT
                  </p>
                  <a
                    style="
                      color: #e56304;
                      font-size: 12px;
                      line-height: 20px;
                      font-weight: 600;
                    "
                    href="https://ridegudauri.com/gudauri"
                    >FIND OUT MORE</a
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="margin-top: 24px; padding: 16px 12px; background: #d5d0cf">
        <table style="margin: auto; max-width: 224px; width: 100%">
          <tbody>
            <tr>
              <td>
                <a
                  href="https://www.facebook.com/SnowSchoolGudauri"
                  style="text-decoration: none"
                >
                  <img
                    src="https://res.cloudinary.com/dmw14gcns/image/upload/v1724407064/facebook_logo_atzf3i.png"
                    alt="facebook_logo"
                  />
                </a>
              </td>

              <td>
                <a
                  href="https://www.instagram.com/ridegudauri/"
                  style="text-decoration: none"
                >
                  <img
                    src="https://res.cloudinary.com/dmw14gcns/image/upload/v1724407127/instagram_logo_xqisis.png"
                    alt="instagram_logo"
                  />
                </a>
              </td>

              <td>
                <a href="tel:+995591144114" style="text-decoration: none">
                  <img
                    src="https://res.cloudinary.com/dmw14gcns/image/upload/v1724407345/whatsapp_logo_l18yl5.png"
                    alt="instagram_logo"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</html>
`;
};
