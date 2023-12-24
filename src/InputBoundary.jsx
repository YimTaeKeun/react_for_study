import { useState } from "react";
const InputBoundary = () => {
    const[text, setText] = useState("");
    return <div className="InputBoundary">
        <input text={text} onChange={(e) => {
            setText(e.target.value);
        }}/>
    </div>
}
export default InputBoundary;