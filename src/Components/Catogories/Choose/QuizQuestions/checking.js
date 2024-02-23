export function check(list,id,option)
{
 
  for (var i = 0; i < list.length; i++)
  {
    if(list[i].id===id)
    {
      if(list[i].answer===option)
      {
        return true
      }
      else
      {
        return false
      }
    }
  
  }
}
export function wronganswerscheck(list,id,item)
{
  console.log(list)

for(let i=0;i<list.length;i++)
{
  if(list[i].id===id)
  {
    if(list[i].item==item)
    {
      console.log(item)
      return true
    }
    else
    {
      return false
    }
  }
}
}