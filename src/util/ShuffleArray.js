const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const centerFreeSpace = (array) => {
  const freeSpace = "⚽";
  let temp = '';
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === freeSpace) {
        temp = array[2][2]
        array[2][2] = freeSpace;
        array[i][j] = temp;
      }
    }
  }
}

export {shuffleArray, centerFreeSpace}