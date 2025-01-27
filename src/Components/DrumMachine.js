import React, { useEffect, useState } from "react";

const DrumPad = ({ id, letter, audioSrc, setDisplay }) => {
  const playSound = () => {
    const audio = document.getElementById(letter);
    if (audio) {
      audio.currentTime = 0; // Rewind to the start
      audio.play();
      setDisplay(id); // Update display with sound name
    }
  };

  return (
    <button className="drum-pad" id={id} onClick={playSound}>
      {letter}
      <audio id={letter} className="clip" src={audioSrc}></audio>
    </button>
  );
};

const DrumMachine = () => {
  const [display, setDisplay] = useState("DRUM MACHINE");

  const drumPads = [
    { id: "Heater-1", letter: "Q", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
    { id: "Heater-2", letter: "W", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
    { id: "Heater-3", letter: "E", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
    { id: "Heater-4", letter: "A", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
    { id: "Clap", letter: "S", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
    { id: "Open-HH", letter: "D", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
    { id: "Kick-n'-Hat", letter: "Z", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
    { id: "Kick", letter: "X", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
    { id: "Closed-HH", letter: "C", audioSrc: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" },
  ];

  useEffect(() => {
    const handleKeyPress = (e) => {
      const pressedKey = e.key.toUpperCase(); // Match uppercase letters
      const pad = drumPads.find((pad) => pad.letter === pressedKey);
      if (pad) {
        const audio = document.getElementById(pad.letter);
        if (audio) {
          audio.currentTime = 0; // Reset to the start
          audio.play();
          setDisplay(pad.id); // Update display with sound name
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [drumPads]);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pad-container">
        {drumPads.map((pad) => (
          <DrumPad
            key={pad.id}
            id={pad.id}
            letter={pad.letter}
            audioSrc={pad.audioSrc}
            setDisplay={setDisplay}
          />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
