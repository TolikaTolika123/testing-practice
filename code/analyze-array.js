export default function (arr) {
  arr = arr.map(num => {
    return !isNaN(+num) ? +num : num;
  });

  if (!Array.isArray(arr) || arr.find(x => typeof x !== 'number') || arr.length === 0) throw new Error('Enter array with numbers');

  const average = [...arr].reduce((a, b) => a + b, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average, min, max, length };
}