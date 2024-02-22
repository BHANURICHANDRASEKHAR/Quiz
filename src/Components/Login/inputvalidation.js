function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
export default function signupvalidation(data,setError)
{
   
   if(data.name.trim()=='' || data.email.trim()=='' || data.password.trim()=='' || data.password1.trim()=='')
   {
    setError('Please fill all the fields');
    return false;
   } 
   if (!validateEmail(data.email)) {
    setError('Email is not valid!')
    return false
  }
  if(data.password.length<6)
  {
    setError('Password length must >6 !')
    return false;
  }
  if(data.password!=data.password1)
  {
    setError('Password are MisMatch !')
    return false;
  }
 
return true;
}

  