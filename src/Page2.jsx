import { useSearchParams } from "react-router-dom";
import { useState } from "react";
const Page2 = () =>{
    const[searchParams, setSearchParams] = useSearchParams();
    const[test, setTest] = useState(false);
    const tag = searchParams.get("hello");
    // let test = false;
    function changeTest(){setTest(!test);}
    return <div className="Page2">
        {
        (test) ?
        <h1>This page is Page2</h1>
        :
        <h2>Fail....</h2>
        }
        <button onClick={() => {setTest(!test);}}>clickToChangeTest</button>
        
    </div>
}
export default Page2;