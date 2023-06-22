import axios from "axios"
import { useDispatch } from "react-redux";
import { setGameList } from "../redux/authReducer/authReducer";

export const useFecth = (email: string) => {
  const dispatch = useDispatch();
  const url = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/";
  const headers = {"dev-email-address":email}
  axios.get(url,{headers})
  .then((res)=>{
    console.log(res.data)
  })
  .catch(e=>{
    console.log(e);
  })
  .finally(()=>{
    console.log("finalizado");
  })
    
  

  
};

