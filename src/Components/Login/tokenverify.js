import Cookies from "js-cookie";
export function getcookie()
{
  try{
    const token = Cookies.get('usertoken');
    return token;
  } 
  catch(e)
  {
    console.log('no token is present')
  }
}