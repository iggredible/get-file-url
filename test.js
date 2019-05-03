const getFileUrl = require("./");
const path = require("path");

test("returns the expected file url", () => {
  const fileName = "/Users/path/to/image.jpg";
  const fileUrl = getFileUrl(fileName);
  expect(fileUrl).toBe("file:///Users/path/to/image.jpg");
});

test("returns encoded file url", () => {
  const fileName = "/Users/path/to/image with space.png";
  const fileUrl = getFileUrl(fileName);
  expect(fileUrl).toBe("file:///Users/path/to/image%20with%20space.png");
});

test("given a file name, returns the resolve path", () => {
  const fileName = "someIcon.svg";
  const fileUrl = getFileUrl(fileName);
  console.log(__filename);
  console.log(__dirname);
  expect(fileUrl).toBe(`file://${__dirname}/${fileName}`);
});
