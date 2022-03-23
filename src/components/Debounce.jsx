import { useState } from "react";
import { useDebounce } from "react-use";

const Debounce = () => {

    const [val, setVal] = useState('');
    const [valFinal, setValFinal] = useState('');

    const [isReady, cancel] = useDebounce(() => {
        setValFinal(val);
    }, 1000, [val])

    return <div>
        <h2>Debounce</h2>
        <p>Valor final: {valFinal}</p>
        <div>
            <input type="text" value={val} onChange={(event) => {
                setVal(event.target.value);
            }} />
        </div>
        <button onClick={cancel}>CANCEL</button>
    </div>
}

export default Debounce;