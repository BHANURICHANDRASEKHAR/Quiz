import axios from "axios";

export function gettop100data(setcardsdata,setloader) {
  setloader(true)
  
  const data = axios.get('https://quiz-app-irbr.onrender.com/topproblems');
  
  data.then((res) => {
    if (res.data.status === 'Success') {
      const responseData = res.data.data;
      
     var a=[]
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
         a.push(responseData[key]);
        }
      
        setcardsdata(a)
        setloader(false)
      }
    }
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
    setloader(false)
  });
  
}
