import axios from "axios";
import { ProblemsListActions } from "../../../redux/problemlist";

export function getproblemlist(setcardsdata, setloader, dispatch) {
  setloader(true);

  const data = axios.get('https://quiz-app-irbr.onrender.com/problemlist');

  data
    .then((res) => {
      if (res.data.status === 'Success') {
        const responseData = res.data.data;
        var a = [];

        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            a.push(responseData[key]);
          }
        }

        dispatch(ProblemsListActions.putdataintostore(a));
        setcardsdata(a);
        setloader(false);
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setloader(false);
    });
}
