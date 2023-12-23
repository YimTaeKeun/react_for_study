import { useState } from "react";
import ListBoundary from "./ListBoundary";
const Main = () => {
    const[number, setNumber] = useState(0);
    function onClickButton(){
        setNumber(parseInt(number) + 1);
    }

    return <div className="Main">
        <h1>{number}</h1>
        <button onClick={onClickButton}>Click This!</button>
        <ListBoundary />
        {/* <div>
        {list.map((each) => (<ListMapComponent props={each}/>))}
        </div> */}
    </div>
}
export default Main;