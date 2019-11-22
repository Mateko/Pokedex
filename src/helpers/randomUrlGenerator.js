const generateRandomUrls = () => {
  const initialUrlArray = new Array(20).fill("/api/v2/pokemon/");

  const randomPokemonsArray = initialUrlArray.map(
    url => url + (Math.floor(Math.random() * 807) + 1)
  );

  return randomPokemonsArray;
};

export default generateRandomUrls;
