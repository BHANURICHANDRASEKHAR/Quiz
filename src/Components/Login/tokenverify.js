import Cookies from "js-cookie";
export default function getcookie()
{
  try{
    const token = Cookies.get('usertoken');
    return token;
  } 
  catch(e)
  {
    return false
    
  }
}
export const clearcookie=()=>
{
  Cookies.remove('usertoken');
}