import axios from "axios"
import styled from "styled-components";
import { useEffect } from "react";
import { useContext } from "react";
import { ScoreContext } from "../App";
import { useNavigate } from "react-router-dom";

const LoginAuthorizationCode =  () => {
    const { setId } = useContext(ScoreContext);
    const BACKEND_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();
  
    useEffect(() => {
      const code = new URL(window.location.href).searchParams.get("code");
  
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BACKEND_BASE_URL}/api/auth/login/code/kakao?code=${code}`);
          console.log(response.data)

          localStorage.setItem('token', response.data.data.token);
          setId(response.data.data.id);
          navigate("/welcome");
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      if (code) fetchData();
    }, [BACKEND_BASE_URL]);
  
  return (
    <MainWrapper>

    </MainWrapper>
  )
}

const MainWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
padding: 120px 40px;
`

export default LoginAuthorizationCode
