const drumPads = [
    { key: "Q", id: "Heater-1" },
    { key: "W", id: "Heater-2" },
    { key: "E", id: "Heater-3" },
    { key: "A", id: "Heater-4" },
    { key: "S", id: "Clap" },
    { key: "D", id: "Open-HH" },
    { key: "Z", id: "Kick-n'-Hat" },
    { key: "X", id: "Kick" },
    { key: "C", id: "Closed-HH" },
];

const DrumMachine = () => {
    return (
        <div id="drum-machine">
            <div id="display">DRUM MACHINE</div>
            <div className="drum-pad-container">
                {drumPads.map((pad) => (
                    <button
                        className="drum-pad"
                        id={pad.id}
                        key={pad.key}
                    >
                        {pad.key}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DrumMachine;
