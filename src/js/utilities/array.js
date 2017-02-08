Array.prototype.inChunksOf = function (n) {
  return this.reduce((acc, item) => {
    if (acc[acc.length - 1].length == n)
      acc.push([]);

    acc[acc.length - 1].push(item);

    return acc;
  }, [[]]);
};
