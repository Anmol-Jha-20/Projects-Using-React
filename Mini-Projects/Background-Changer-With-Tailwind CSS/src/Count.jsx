import { useState } from "react";
import "./Count.css";

export default function Count() {
    const [count, setCount] = useState(0);
    let addCount = () => {
        if (count < 20) {
            setCount(prevCount => prevCount + 1);
            setCount(prevCount => prevCount + 1);
        }
    };
    let subCount = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
            setCount(prevCount => prevCount - 1);
        }
    };
    return (
        <div style={{ textAlign: "center", color: "#330000", fontSize: "1.3rem" }}>
            <h2>Count:{count}</h2>
            <button onClick={addCount} className="Count">Add Count</button>
            <button onClick={subCount} className="Count">Decrease Count</button>
        </div>
    );
}