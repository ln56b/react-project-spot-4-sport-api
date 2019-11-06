function getLetterArray() {
  const letterArr = [];
  for (let i = 0; i < 26; i += 1) {
    letterArr.push(String.fromCharCode(65 + i));
  }
  return letterArr;
}

export default getLetterArray;
