export function check(list, id, option) {
  const matchingAnswer = list.find((item) => item.id === id);

  return matchingAnswer ? matchingAnswer.answer === option : false;
}

export function wronganswerscheck(list, id, item) {
  const matchingItem = list.find((listItem) => listItem.id === id);

  return matchingItem ? matchingItem.item === item : false;
}
