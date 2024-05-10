export default function CopyOrderObject(obj, Array) {
  const probs = [];
  const notProbs = [];

  for (const property in obj) {
    if (Array.includes(property)) {
      probs.push(property);
    } else {
      notProbs.push(property);
    }
  }

  const sortProbs = probs.sort((a, b) => Array.indexOf(a) - Array.indexOf(b));
  const sortProbsAZ = notProbs.sort();

  const sortedArray = sortProbs.map((property) => ({ key: property, value: obj[property] }));
  const unsortedArray = sortProbsAZ.map((property) => ({ key: property, value: obj[property] }));

  return [...sortedArray, ...unsortedArray];
}