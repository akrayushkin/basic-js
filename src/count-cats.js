module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(arr => {
    arr.filter(item => {
      if (item === "^^") count++;
    });
  });
  return count;
};
