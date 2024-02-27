import axios from "axios";
export function getcodes(data,setdata,setloader)
{
    setloader(true)
    const res=axios.post('https://quiz-app-irbr.onrender.com/getcodes',data);
    res.then((response)=>{
       
       setdata(response.data.data)
       setloader(false)

       
    })
    res.catch(err=>{
        console.log(err.message)
    })
}
export function getalgo(setdata,setloader,id)
{
    const data=axios.post('https://quiz-app-irbr.onrender.com/getalgorithm');
    data.then((res) => {
        if (res.data.status === 'Success') {
          const responseData = res.data.data;
          
         var b=[]
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
             b.push(responseData[key]);
            }
          }
          const resdata=b.filter((items=>items.id==id));
          
          setdata(resdata)
          setloader(false)
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setloader(false)
      });
}