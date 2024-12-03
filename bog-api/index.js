const axios = require("axios");

exports.authBog = async () => {
  try {
    const baseAPI =
      "https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token";

    const body = new URLSearchParams({
      grant_type: "client_credentials",
    }).toString();

    const authBearer = btoa(
      `${process.env.BOG_API_CLIENT_ID}:${process.env.BOG_API_SECRET_KEY}`
    );

    const data = await axios.post(baseAPI, body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authBearer}`,
      },
    });

    return data.data;
  } catch (err) {
    console.log(err);
  }
};

exports.requestBogBooking = async (data, token, lang) => {
  try {
    const baseAPI = "https://api.bog.ge/payments/v1/ecommerce/orders";

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept-Language": lang,
    };

    const response = await fetch(baseAPI, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
    });

    const respData = await response.json();

    return respData;
  } catch (err) {
    console.log(err);
  }
};
