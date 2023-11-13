import Jimp from "jimp";

export default async function getColors() {
  const image = await Jimp.read("https://cdnb.artstation.com/p/assets/images/images/026/860/543/large/valeriya-kim-dotpict-20181216-160156.jpg?1589922819");
  const colors = [];

  const aspect = image.bitmap.width / image.bitmap.height;
  const newWidth = 20;
  const newHeight = Math.floor(newWidth / aspect);

  const widthInc = Math.floor(image.bitmap.width / newWidth);
  const heightInc = Math.floor(image.bitmap.height / newHeight);

  for (let i = 0; i < newHeight; i++) {
    const row = [];
    for (let j = 0; j < newWidth; j++) {
      const pixel = image.getPixelColor(j * widthInc, i * heightInc);
      const rgba = Jimp.intToRGBA(pixel);
      row.push(rgba);
    }
    colors.push(row);
  }

  console.log(colors);
  console.log(widthInc, heightInc);
  console.log(image.bitmap.height, image.bitmap.width);
  return colors;
}