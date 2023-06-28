import mergeStrArrays from './merge-sorted-arrays.js';
const mergeSort = (arr) => {
    if (arr.length <= 1)
        return arr;
    const middleIndex = Math.floor(arr.length / 2);
    const first = arr.slice(0, middleIndex);
    const second = arr.slice(middleIndex);
    return mergeStrArrays(mergeSort(first), mergeSort(second));
};
export default mergeSort;
