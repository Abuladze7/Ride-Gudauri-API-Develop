const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ride Gudauri API",
      description: "API for Ride Gudauri",
      version: "1.0.0",
    },
  },
  apis: [path.join(__dirname, "../routes/*.js")],
};

const specs = swaggerJSDoc(options);
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const customCss =
  ".swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }";

module.exports = {
  specs,
  swaggerUi,
  CSS_URL,
  customCss,
};
