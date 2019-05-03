"use strict";

const path = require("path");

// TODO: figure out how to handle windows
module.exports = filePath => {
  if (typeof filePath !== "string") {
    throw new TypeError("Please enter a string file path");
  }

  const resolvedFilePath = path.resolve(filePath);

  return encodeURI(`file://${resolvedFilePath}`);
};
