const mergeStrArrays = (arr1: string[], arr2: string[]) => {
  const firstArr = arr1.slice();
  const secondArr = arr2.slice();

  const result: string[] = [];

  let first = firstArr.shift();
  let second = secondArr.shift();

  while (!!first && !!second) {
    if (first.localeCompare(second) < 0) {
      result.push(first);
      first = firstArr.shift();
    } else if (first.localeCompare(second) > 0) {
      result.push(second);
      second = secondArr.shift();
    } else {
      result.push(first, second);
      first = firstArr.shift();
      second = secondArr.shift();
    }
  }

  if (first) {
    result.push(first);
  } else if (second) {
    result.push(second);
  }

  return [...result, ...firstArr, ...secondArr];
};

export default mergeStrArrays;
