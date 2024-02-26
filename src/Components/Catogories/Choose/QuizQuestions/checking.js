export function check(list, id, option) {
  if(list.length>0)
  {
    const matchingAnswer = list.find((item) => item.id === id);
   
  return matchingAnswer ? matchingAnswer.answer === option : false;
  }
  else{
    return false;
  }
}

export function wronganswerscheck(list, id, item) {
if(list.length>0)
{
  const matchingItem1 = list.filter((listItem) => listItem.id === id);
  const matchingItem=matchingItem1.find((items)=>items.item==item);
  return matchingItem ? matchingItem.item === item : false;
}
else{
  return false;
}
}
