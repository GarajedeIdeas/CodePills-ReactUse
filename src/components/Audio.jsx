import { useAudio } from "react-use";

const Audio = () => {

    const [audio, state, controls, ref] = useAudio({
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
        autoPlay: false
    });

    return <div>
        <h2>Audio</h2>
        {audio}
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <button onClick={controls.pause}>PAUSE</button>
        <button onClick={controls.play}>PLAY</button>
        <button onClick={controls.mute}>MUTE</button>
        <button onClick={controls.unmute}>UNMUTE</button>
        <input type="range" min="0" max="1" step="0.1" onChange={(event) => {
            controls.volume(event.target.value);
        }} />
    </div>
}

export default Audio;