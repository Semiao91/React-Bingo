const checkWinningCondition = (selected) => {

  const diagonal1 = [0, 6, 18, 24];
  const diagonal2 = [4, 8, 16, 20];
  const rows = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24]];
  const columns = [[0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24]];

  for (let i = 0; i < rows.length; i++) {
    if (rows[i].every(index => selected[index] === 1)) {
      return true;
    }
  }

  for (let i = 0; i < columns.length; i++) {
    if (columns[i].every(index => selected[index] === 1)) {
      return true;
    }
  }

  if (diagonal1.every(index => selected[index] === 1) || diagonal2.every(index => selected[index] === 1)) {
    return true;
  }

  return false;
};

export { checkWinningCondition };