const rawData = require("./settings.json");

module.exports = rawData.items.reduce((acc, { name, value }) => {
  acc[name] = value;
  return acc;
}, {});