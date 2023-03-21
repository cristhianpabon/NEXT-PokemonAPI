export function getAllPokemonIds() {
  const count = 1281;
  const arrayIds = [];

  for (let index = 1; index <= count; index++) {
    arrayIds.push({
      params: {
        id: `${index}`,
      },
    });
  }

  return arrayIds;
}

export function getValidPokemonNumber(id) {
  let number;

  if (id < 10 && id > 0) {
    number = `00${id}`;
  } else if (id < 100 && id > 9) {
    number = `0${id}`;
  } else {
    number = id;
  }

  return number;
}
