/**
 * 
 * @param {*} width 
 * @param {*} height 
 * This function generates a number array based on width and height
 */
function arrayGen(width, height) {
  let widthArr = [];
  let heightArr = [];
  let tempHeightArr = [];
  for (let i = 0; i < width; i++) {
    widthArr.push(1);
  }
  for (let i = 0; i < width - 2; i++) {
    tempHeightArr.push(0)
  }
  tempHeightArr = [2, ...tempHeightArr, 2];
  for (let i = 0; i < height; i++) {
    heightArr.push(tempHeightArr)
  }
  return [widthArr, ...heightArr, widthArr];
}

/**
 * 
 * @param {*} w 
 * @param {*} h 
 * @param {*} p 
 * 
 * This function generates a string array based on the width, height and padding. It uses the arrayGen function
 */
function generateStringArray(w, h, p) {
  let initArr = (arrayGen(w, h));

  for (let i = p / 2 + 1; i < (h / 2 + 1); i += p - 1) {
    const width = w - i * 2;
    const height = h - i * 2;

    const arr = arrayGen(width, height);

    arr.forEach((j, index) => {
      initArr[i + index] = [...initArr[i].slice(0, i), ...j, ...initArr[i].slice(initArr[i].length - i, initArr[i].length + i)];
    })
  }
  return initArr.map(x => x.join(''));
}

/**
 * 
 * @param {*} width 
 * @param {*} height 
 * @param {*} padding 
 * 
 * The draw function recieves a width, height and padding and generates a string based on the stringArray.
 */
function draw(width, height, padding) {
  const conv = x => x === '1' ? '-' : x === '2' ? '|' : ' ';
  const strArr = generateStringArray(width, height, padding);
  const pixStr = strArr.map(x => x.split('').map(x => conv(x)).join('')).join('\n');
  return pixStr;
}

console.log(draw(40, 28, 4));
console.log(draw(120, 40, 4));