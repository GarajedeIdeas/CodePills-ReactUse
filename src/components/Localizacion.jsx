import { useGeolocation } from 'react-use';

const Localizacion = () => {

    const state = useGeolocation();

    return <div>
        <h2>Localización</h2>
        <pre>
            {JSON.stringify(state, null, 2)}
        </pre>
    </div>
}

export default Localizacion;