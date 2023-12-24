import { useState } from "react";
import ListBoundary from "./ListBoundary";
import InputBoundary from "./InputBoundary";
import { useNavigate } from "react-router-dom";
const Main = () => {
    const navigate = useNavigate();
    function movePage(){
        navigate("/page2?hello=Hello");
    }
    const[number, setNumber] = useState(0);
    function onClickButton(){
        setNumber(parseInt(number) + 1);
    }

    return <div className="Main">
        <h1>{number}</h1>
        <button onClick={onClickButton}>Click This!</button>
        <InputBoundary />
        <button onClick={movePage}>Refresh</button>
        {/* <ListBoundary /> */}
    </div>
}
export default Main;