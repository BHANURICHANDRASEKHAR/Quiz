import axios from "axios";

export function gettypecard(link,setcardsdata,setloader) {
  setloader(true)
  var type={
    type:link
  }
  const data = axios.post('https://quiz-app-irbr.onrender.com/offers',type);
  
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
