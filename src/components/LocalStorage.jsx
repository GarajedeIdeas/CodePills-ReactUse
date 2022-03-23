import { useLocalStorage } from "react-use";

const LocalStorage = () => {

    const [loginDate, setLoginDate, removeLoginDate] = useLocalStorage('login_date', '');

    return <div>
        <h2>LocalStorage</h2>
        {loginDate && <p>Fecha login: {loginDate}</p>}
        <button onClick={() => setLoginDate(new Date())}>LOGIN</button>
        <button onClick={removeLoginDate}>ELIMINAR</button>
    </div>
}

export default LocalStorage;