const randomID = (idLength) => {
  let id = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsAmount = characters.length;
  for (let i = 0; i < idLength; i++) {
    id += characters.charAt(Math.floor(Math.random() * charsAmount));
  }
  return id;
};

console.log('Your Random ID is: ' + randomID(5));

module.exports = randomID;
