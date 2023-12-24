import { useSearchParams } from "react-router-dom";
const Page2 = () =>{
    const[searchParams, setSearchParams] = useSearchParams();
    const tag = searchParams.get("hello");
    return <div className="Page2">
        {
        (tag == "Hello") ?
        <h1>This page is Page2</h1>
        :
        <h2>Fail....</h2>
        }
    </div>
}
export default Page2;